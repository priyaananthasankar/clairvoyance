export interface Error {
  code: string
  message: string
  innerError: InternalError
}

export interface ErrorResponse {
  error: Error
}

export interface InternalError {
  code: string
  message: string
  innerError: undefined
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
