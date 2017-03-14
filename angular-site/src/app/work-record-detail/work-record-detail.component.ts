import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkRecord } from '../work-record';

@Component({
    selector: 'my-work-record-detail',
    moduleId: module.id,
    templateUrl: './work-record-detail.component.html',
    styleUrls: ['./work-record-detail.component.css'],
})

export class WorkRecordDetailComponent implements OnInit {
    constructor(
    ) { };

    ngOnInit(): void {
    };

    @Input()
    workRecord: WorkRecord;

    @Input()
    technology: string;

    // Method to decide if the item should be displayed or not
    shouldDisplay(item: string): boolean {
        if (this.technology === undefined || item.includes(this.technology)) {
            return true;
        }
        return false;
    };

    displayHtml(item: string): string {
        if (this.technology !== undefined) {
            // TODO: Highlight the technology in this text
            return item;
        }
        return item;
    };
}