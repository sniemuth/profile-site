import { Component, OnInit } from '@angular/core';
import { CvSummarySection } from '../cv-summary-section';
import { WorkRecord } from '../work-record';
import { WorkRecordService } from '../work-record.service';

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
  profileHighlights = ["Over 9 years' experience developing in the Microsoft stack", "Worked across a range of business industries and public sector projects", "Comfortable as sole developer or collaborating in team", "All around programmer: strong front-end and middle tier skills along with database experience", "Motivated to create clean, quality, tested code using modern standards", "Experience in waterfall and agile methodologies", " Worked with most major source control systems", "Adaptable, focused, highly efficient developer with passion for excellence"];
  // These should be coming from a database somewhere
  technicalSkillsMatrix: Array<CvSummarySection> = [
    { name: "Microsoft", technologies: ["C#", ".NET 4.x", "MVC", "MS SQL", "Entity Framework", "WebAPI", "WCF", "SignalR", "LINQ"] },
    { name: "Cloud", technologies: ["AWS", "Elastic Beanstalk", "DynamoDB", "Lambda", "SNS", "SQS"] },
    { name: "Front-end", technologies: ["Angular2", "KnockoutJS", "HTML", "CSS", "Javascript", "jQuery", "less", "KendoUI", "XSLT", "Adobe products (Fireworks, Photoshop)"] },
    { name: "Utilities/CMS", technologies: ["RabbitMQ", "Postsharp", "Automapper", "umbraco", "nopCommerce"] },
    { name: "CI and versioning", technologies: ["TeamCity", "TFS", "CruiseControl", "SVN", "Git/BitBucket"] },
    { name: "IoC/Testing", technologies: ["Ninject", "Unity", "Castle", "TDD", "BDD", "NUnit", "Moq", "NSubstitute", "Selenium", "SpecFlow"] },
    { name: "PM Methodologies", technologies: ["Agile Kanban", "Agile Scrum", "Waterfall"] },
    { name: "Monitoring/Tracking Tools", technologies: ["TargetProcess", "Confluence", "JIRA", "TFS"] },
  ];
  allWorkRecords: Array<WorkRecord> = [];
  selectedTechnology: string;
  relevantWorkRecords: Array<WorkRecord> = [];

  getWorkRecords(): void {
    this.workRecordService.getWorkRecords().then(workRecords => this.allWorkRecords = workRecords);
  };

  clearSelectedTechnology(): void {
    this.selectedTechnology = null;
  }

  onTechnologySelect(technology: string): void {
    // Turn off the selected
    if (this.selectedTechnology === technology) {
      this.clearSelectedTechnology();
    }
    // Setting the selected
    else {
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
}