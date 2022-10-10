import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-stars',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating = 0; //rating value gets updated based on the ProductListComponent and converts it to the stars
    cropWidth = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 15;
    }

    onClick(): void{
        console.log(`Rating ${this.rating} was clicked`);
        this.ratingClicked.emit('Rating $' + this.rating + ' was clicked');  
    }
}