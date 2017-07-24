import * as request from 'superagent'
import { recommendations } from '../../config'
import {
  BuildInfoList,
  BuildModelResponse,
  BuildRequestInfo,
  ErrorResponse
} from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (modelId: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/models/${modelId}/builds`

export const createBuild = async (
  modelId: string,
  buildRequestInfo: BuildRequestInfo
): Promise<BuildModelResponse | ErrorResponse> =>
  (await request
    .post(baseURL(modelId))
    .set('Ocp-Acim_Subscription-Key', SUBSCRIPTION_KEY)
    .set('Content-Type', 'application/json')
    .send(buildRequestInfo)).body

export const getBuilds = async (
  modelId: string,
  onlyLastRequestedBuild: boolean = false
): Promise<BuildInfoList | ErrorResponse> =>
  (await request
    .get(baseURL(modelId))
    .set('Ocp-Acim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({ onlyLastRequestedBuild })
    .send()).body
