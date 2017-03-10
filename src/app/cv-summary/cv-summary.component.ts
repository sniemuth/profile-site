import { Component, OnInit } from '@angular/core';
import { CvSummarySection  } from '../cv-summary-section';
import { WorkRecord  } from '../work-record';
import { WorkRecordService  } from '../work-record.service';

@Component({
  selector: 'app-cv-summary',
  templateUrl: './cv-summary.component.html',
  styleUrls: ['./cv-summary.component.css']
})
export class CvSummaryComponent implements OnInit {

  constructor(private workRecordService: WorkRecordService) { }
  ngOnInit(): void {
    this.getWorkRecords();
  }

name = "Seth Niemuth";
email = "seth@madebyseth.com";
skype = "sniemuth";
profileHighlights = [ "Over 9 years' experience developing in the Microsoft stack", "test" ];
technicalSkillsMatrix : Array<CvSummarySection> = [
  { name : "Microsoft", technologies : ["C#", ".NET 4.5", "MVC", "MS SQL", "Entity Framework", "WebAPI", "WCF", "SignalR", "LINQ"]},
  { name :"Cloud", technologies : ["AWS", "Elastic Beanstalk", "DynamoDB", "Lambda", "SNS", "SQS"]}
  ];
allWorkRecords : Array<WorkRecord> = [];
selectedTechnology : string;
relevantWorkRecords : Array<WorkRecord> = [];

 getWorkRecords(): void {
    this.workRecordService.getWorkRecords().then(workRecords => this.allWorkRecords = workRecords);
  };

shouldDisplay(item : string, technology : string): boolean {
if(item.includes(technology))
{
  return true;
}
return false;
};

displayHtml(item : string, technology : string): string {

return item +" *display*";
};


onSelect(technology: string): void {
    this.selectedTechnology = technology;
this.relevantWorkRecords = [];

for (let workRecord of this.allWorkRecords) {
    var addWorkRecord = false;

if (workRecord.technologies.indexOf(technology) > -1) {
this.relevantWorkRecords.push(workRecord);
}

  }

};

}