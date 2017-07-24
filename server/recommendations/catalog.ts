import * as request from 'superagent'
import { recommendations } from '../../config'
import { CatalogImportStats, ErrorResponse } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (modelId: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/operations/${modelId}`

export const uploadCatalog = async (
  modelId: string,
  catalogDisplayName: string,
  file: string = ''
): Promise<CatalogImportStats | ErrorResponse> =>
  (await request
    .post(baseURL(modelId))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({ catalogDisplayName })
    .send(file)).body
