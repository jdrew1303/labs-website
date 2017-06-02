export class StaticEvent {
  constructor(title, eventDateTime, locationName, groupName, summary, link, isExcellaSponsored, isExcellaHosted, isExcellianSpeaking, id){
    this.title = title;
    this.eventDateTime = eventDateTime;
    this.locationName = locationName;
    this.groupName = groupName;
    this.summary = summary;
    this.link = link;
    this.isExcellaSponsored = isExcellaSponsored;
    this.isExcellaHosted = isExcellaHosted;
    this.isExcellianSpeaking = isExcellianSpeaking;
    this.id = id;

  }
}