export interface BuildInfo {
  id: number
  description: string
  type: string
  modelName: string
  modelId: string
  status: string
  statusMessage: string
  startDateTime: string
  endDateTime: string
  modifiedDateTime: string
  buildParameters: BuildParameters
}

export interface BuildInfoList {
  builds: BuildInfo[]
}

export interface BuildModelResponse {
  buildId: number
}

export type BuildParameters =
  | RankingBuildParameters
  | RecommendationBuildParameters
  | FbtBuildParameters
  | SarBuildParameters

export interface BuildRequestInfo {
  description: string
  buildType: BuildType
}

type BuildType = 'recommendation' | 'rank' | 'fbt' | 'sar'

export interface CatalogImportStats {
  processedLineCount: number
  errorLineCount: number
  importedLineCount: number
  errorSummary: ErrorStats[]
  sampleErrorDetails: ErrorDetail[]
}

export interface CatalogItemsPage {
  value: ICatalogLine[]
  nextLink: string
}

export interface DateSplitterParameters {
  splitDate: string
}

export interface Error {
  code: string
  message: string
  innerError: InternalError
}

export interface ErrorResponse {
  error: Error
}

interface ErrorDetail {
  errorCode: string
  errorText: string
  sampleErrorLines: ErrorLine[]
}

interface ErrorLine {
  lineNumber: number
  lineText: string
}

interface ErrorStats {
  errorCode: string
  errorCodeCount: number
}

export interface FbtBuildParameters {
  supportThreshold: number
  maxItemSetSize: number
  minimalScore: number
  similarityFunction: string
  enableModelingInsights: boolean
  splitterStrategy: string
  randomSplitterParameters: RandomSplitterParameters
  dateSplitterParameters: DateSplitterParameters
  popularItemBenchmarkWindow: number
}

interface ICatalogLine {
  id: string
  name: string
  category: string
  description: string
  features: ItemFeature[]
  metadata: string
}

export interface InternalError {
  code: string
  message: string
  innerError: undefined
}

interface ItemFeature {
  name: string
  value: string
}

export interface ModelInfo {
  id: string
  name: string
  description: string
  createdDateTime: string
  activeBuildId: number
  catalogDisplayName: string
}

export interface ModelInfoList {
  models: ModelInfo[]
}

export interface ModelRequestInfo {
  modelName: string
  description: string
}

export interface OperationInfo<T> {
  type: string
  status: string
  createdDateTime: string
  lastActionDatetime: string
  percentComplete: number
  message: string
  resourceLocation: string
  result: T
}

export interface RandomSplitterParameters {
  testPercent: number
  randomSeed: number
}

export interface RankingBuildParameters {
  numberOfModelIterations: number
  numberOfModelDimensions: number
  itemCutOffLowerBound: number
  itemCutOffUpperBound: number
  userCutOffLowerBound: number
  userCutOffUpperBound: number
}

export interface RecommendationBuildParameters {
  numberOfModelIterations: number
  numberOfModelDimensions: number
  itemCutOffLowerBound: number
  itemCutOffUpperBound: number
  userCutOffLowerBound: number
  userCutOffUpperBound: number
  enableModelingInsights: boolean
  splitterStrategy: string
  randomSplitterParameters: RandomSplitterParameters
  dateSplitterParameters: DateSplitterParameters
  popularItemBenchmarkWindow: number
  useFeaturesInModel: boolean
  modelingFeatureList: string
  allowColdItemPlacement: boolean
  enableFeatureCorrelation: boolean
  reasoningFeatureList: string
  enableU2I: boolean
}

interface RecommendedItemInfo {
  id: string
  name: string
  metadata: string
}

export interface RecommendedItemSetInfo {
  items: RecommendedItemInfo[]
  rating: number
  reasoning: string[]
}

export interface RecommendedItemSetInfoList {
  recommendedItems: RecommendedItemSetInfo[]
}

export interface SarBuildParameters {
  supportThreshold: number
  coocurrenceUnit: string
  enableColdItemPlacement: boolean
  enableColdToColdRecommendations: boolean
  enableModelingInsights: boolean
  enableU2I: boolean
  splitterStrategy: string
  randomSplitterParameters: RandomSplitterParameters
  dateSplitterParameters: DateSplitterParameters
  popularItemBenchmarkWindow: number
  enableUserAffinity: boolean
  allowSeedItemsInRecommendations: boolean
  enableBackfilling: boolean
}

interface UpdateModelRequestActiveBuildId {
  activeBuildId: string
}

interface UpdateModelRequestDescription {
  description: string
}

export type UpdateModelRequestInfo =
  | UpdateModelRequestActiveBuildId
  | UpdateModelRequestDescription
  | UpdateModelRequestActiveBuildId & UpdateModelRequestDescription

export interface UsageImportStats {
  fileId: string
  processedLineCount: number
  errorLineCount: number
  importedLineCount: number
  errorSummary: ErrorStats[]
  sampleErrorDetails: ErrorDetail[]
}
