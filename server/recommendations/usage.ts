import * as request from 'superagent'
import { recommendations } from '../../config'
import { ErrorResponse, UsageImportStats } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (modelId: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/models/${modelId}/usage`

export const uploadUsage = async (
  modelId: string,
  usageDisplayName: string,
  file: string
): Promise<UsageImportStats | ErrorResponse> =>
  (await request
    .post(baseURL(modelId))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({ usageDisplayName })
    .send(file)).body
