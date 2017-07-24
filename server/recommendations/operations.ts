import * as request from 'superagent'
import { recommendations } from '../../config'
import { ErrorResponse, OperationInfo } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (operationId: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/operations/${operationId}`

export const cancelOperation = async <T>(
  operationId: string
): Promise<OperationInfo<T> | ErrorResponse> =>
  (await request
    .delete(baseURL(operationId))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body

export const getOperation = async <T>(
  operationId: string
): Promise<OperationInfo<T> | ErrorResponse> =>
  (await request
    .get(baseURL(operationId))
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .send()).body
