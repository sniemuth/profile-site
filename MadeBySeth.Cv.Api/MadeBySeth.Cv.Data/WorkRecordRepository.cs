using System;
using System.Collections.Generic;
using MadeBySeth.Cv.Api.Core;
using System.Threading.Tasks;

namespace MadeBySeth.Cv.Data
{
    public class WorkRecordRepository : IWorkRecordRepository
    {
        /// <summary>
        /// Currently just hardcoded rather than coming from a data source
        /// </summary>
        /// <returns>List of work records</returns>
        public async Task<IEnumerable<WorkRecord>> GetAll()
        {
            return new List<WorkRecord>
            {
               new WorkRecord { Id = 15, Title = "Contract Developer (2 extensions)", Company = "SSP Worldwide, Halifax, UK", StartDate= new DateTime(2016, 2, 1), EndDate= new DateTime(2016, 12, 1), Summary= "Continuous provision of support and addition of relevant features to several insurance products at aninternational financial corporation. Separated MVC web applications communicating across WCF and WebAPI. Utilised TFS for source control, CI, deployments, nuget packaging and to track progress of bugs, tasks, user stories and epics.", Technologies = new List<string> {"C#", ".NET 4.x", "MVC", "WebAPI", "WCF/Web Services", "Unity", "Entity Framework", "MS SQL", "HTML", "CSS", "jQuery", "KnockoutJS", "TFS", "Selenium", "SpecFlow" }, KeyAchievements = new List<string> {"Implemented a fully automated testing suite to run every night using TFS, Selenium and SpecFlow", "Converted limited requirements into coherent fully featured solutions with documentation", "Worked to implement best practices into code base with refactor work to add EF migrations, separation, between distinct products and appropriate service and data layers, and more coherent DI implementation", "Created plan to fully automate deployments into cumbersome UAT and production environments using TFS and windows services", "Proactively work to identify and fix problems with consensus from team as well as help the rest of the team more quickly identify the problems using CI and testing" } },
               new WorkRecord { Id = 14, Title = "Contract Developer (6 extensions)", Company = "ControlF1, Huddersfield, UK", StartDate= new DateTime(2014, 12, 1), EndDate= new DateTime(2016, 1, 1), Summary= "Developed the telematics system of a leading vehicle breakdown cover and insurance company by fixing bugs and adding features. Hosted on AWS which made use of MVC sites, WCF services, SNS messages, SQS queues with a backing of DynamoDB and MySQL. Continuous integration using TeamCity and source control with Git. Utilised JIRA to keep track of sprints, features, user stories, tasks, bugs and time. Unit and integration test writing as part of TDD with code reviews done part of every pull request.", Technologies = new List<string> {"C#", ".NET 4.x", "MVC", "AWS", "Elastic Beanstalk", "WCF/Web Services", "Ninject", "DynamoDB", "Lambda", "NodeJS and Grunt", "SNS", "SQS", "MySQL", "HTML", "CSS", "jQuery", "KnockoutJS", "Agile Kanban", "TeamCity", "Git" },  KeyAchievements = new List<string> {"Initiated and saw to completion several important pieces of refactoring such as a rework of the Dependency Injection setup using Ninject", "Saw to completion several pieces of work to add features and stability to the product", "Developed and implemented one click deployment release process from TeamCity to Elastic Beanstalk", "Provided solution architecture direction with a web based approach and background", "Essential part of redeveloping architecture for AWS cloud hosted solution", "Was able to shift quickly between contexts to help meet the needs of the client" } },
            };
        }
    }
}
