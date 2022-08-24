export enum PipelineExecutionStatus {
  Running = "Running",
  Success = "Succeeded",
  Failed = "Failed",
  Pending = "Pending",
}

export enum ExecutionViewButton {
  Details = "User details",
  Reaady = "Ready to Run",
  DownloadArtifacts = "ARTIFACT(S)",
  Logs = "log",
  CommitTitle = "Commit {id}",
  Download = "Download",
  Delete = "Delete",
}

export enum ExecutionDetailsPanel {
  Event = "event",
}
