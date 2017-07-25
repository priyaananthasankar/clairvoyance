import * as request from 'superagent'
import { recommendations } from '../../config'
import { ErrorResponse, RecommendedItemSetInfoList } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

const baseURL = (modelId: string) =>
  `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/models/${modelId}/recommend`

export const recommendItems = async (
  modelId: string,
  itemIds: string[],
  numberOfResults: number,
  minimalScore: number,
  includeMetadata: boolean = false,
  buildId: number = -1
): Promise<RecommendedItemSetInfoList | ErrorResponse> =>
  (await request
    .get(baseURL(modelId) + '/item')
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({
      buildId,
      includeMetadata,
      itemIds: itemIds.join(),
      minimalScore,
      numberOfResults
    })
    .send()).body

export const recommendUser = async (
  modelId: string,
  userId: string,
  numberOfResults: number,
  itemIds: string[] = [],
  includeMetadata: boolean = false,
  buildId: number = -1
): Promise<RecommendedItemSetInfoList | ErrorResponse> =>
  (await request
    .get(baseURL(modelId) + '/user')
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({
      buildId,
      includeMetadata,
      itemIds: itemIds.join(),
      numberOfResults,
      userId
    })
    .send()).body
