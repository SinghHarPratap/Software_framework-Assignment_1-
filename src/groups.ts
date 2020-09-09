export class Groups {
  objid: string
  id: number
  group_name: string
  members: string[] = []
  channel: [{ channelname: ''; logs: [] }] = [{ channelname: '', logs: [] }]

  constructor(
    objid: string,
    _id: number,
    _group_name: string,
    _members: string[] = [],
    _channel: [{ channelname: ''; logs: [] }]
  ) {
    this.objid = objid
    this.id = _id
    this.group_name = _group_name
    this.members = _members
    this.channel = _channel
  }
}
