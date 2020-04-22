import { JsonPlaceholderService } from "./../../services/json-placeholder.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.css"],
})
export class PlaygroundComponent implements OnInit {
  constructor(private jsonPlaceHolder: JsonPlaceholderService) {}
  dtOptions = {
    info: true,
    paging: true,
    pageLength: 25,
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "All"],
    ],
    sort: true,
    searching: false,
    responsive: true,
    columnDefs: [
      {
        data: "userId",
        width: "10%",
        targets: 0,
        sortable: true,
      },
      {
        data: "title",
        targets: 1,
        sortable: false,
      },
      {
        data: "completed",
        width: "20%",
        targets: 2,
        sortable: false,
      },
    ],
  };
  showNewRow: boolean = false;
  dtRows = this.jsonPlaceHolder.getFakeData();

  add() {
    this.showNewRow = true;
  }
  hide() {
    this.showNewRow = false;
  }
  ngOnInit() {}
}
