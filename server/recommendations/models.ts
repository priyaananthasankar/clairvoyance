import * as request from 'superagent'
import { recommendations } from '../../config'
import {
  ErrorResponse,
  ModelInfo,
  ModelInfoList,
  ModelRequestInfo,
  UpdateModelRequestInfo
} from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL =
  'https://westus.api.cognitive.microsoft.com/recommendations/v4.0/models'

export const createModel = async (
  model: ModelRequestInfo
): Promise<ModelInfo | ErrorResponse> =>
  (await request
    .post(baseURL)
    .set('Content-Type', 'application/json')
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send(model)).body

export const deleteModel = async (id: string): Promise<void | ErrorResponse> =>
  (await request
    .delete(baseURL + `/${id}`)
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body

export const getModelInfo = async (id: string): Promise<ModelInfo> =>
  (await request
    .get(baseURL + `/${id}`)
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body

export const getModels = async (): Promise<ModelInfoList> =>
  (await request
    .get(baseURL)
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body

export const updateModel = async (
  id: string,
  updateInfo: UpdateModelRequestInfo
): Promise<void | ErrorResponse> =>
  (await request
    .patch(baseURL + `/${id}`)
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send(updateInfo)).body
