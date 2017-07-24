import * as request from 'superagent'
import { recommendations } from '../../config'
import { ErrorResponse, OperationInfo } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (id: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/operations/${id}`

export const cancelOperation = async <T>(
  id: string
): Promise<OperationInfo<T> | ErrorResponse> =>
  (await request
    .delete(baseURL(id))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body

export const getOperation = async <T>(
  id: string
): Promise<OperationInfo<T> | ErrorResponse> =>
  (await request
    .get(baseURL(id))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body
