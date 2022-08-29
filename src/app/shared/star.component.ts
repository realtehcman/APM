import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    numberOfStars = 4;
    cropWidth = 75;

    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }

}