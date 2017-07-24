import * as request from 'superagent'
import { recommendations } from '../../config'
import { ErrorResponse, RecommendedItemSetInfoList } from './types'

const { subscriptionKey: SUBSCRIPTION_KEY } = recommendations

export const recommendItems = async (
  modelId: string,
  itemIds: string[],
  numberOfResults: number,
  minimalScore: number,
  buildId: number = -1,
  includeMetadata: boolean = false
): Promise<RecommendedItemSetInfoList | ErrorResponse> =>
  (await request
    .get(
      `https://westus.api.cognitive.microsoft.com/recommendations/v4.0/models/${modelId}/recommend/item`
    )
    .set('Ocp-Apim-Subscription-Key', SUBSCRIPTION_KEY)
    .query({
      buildId,
      includeMetadata,
      itemIds: itemIds.join(),
      minimalScore,
      numberOfResults
    })
    .send()).body
