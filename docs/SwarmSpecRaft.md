# DockerEngineApi.SwarmSpecRaft

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshotInterval** | **Number** | The number of log entries between snapshots. | [optional] 
**keepOldSnapshots** | **Number** | The number of snapshots to keep beyond the current snapshot.  | [optional] 
**logEntriesForSlowFollowers** | **Number** | The number of log entries to keep around to sync up slow followers after a snapshot is created.  | [optional] 
**electionTick** | **Number** | The number of ticks that a follower will wait for a message from the leader before becoming a candidate and starting an election. `ElectionTick` must be greater than `HeartbeatTick`.  A tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.  | [optional] 
**heartbeatTick** | **Number** | The number of ticks between heartbeats. Every HeartbeatTick ticks, the leader will send a heartbeat to the followers.  A tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed.  | [optional] 


