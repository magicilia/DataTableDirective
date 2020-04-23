import { JsonPlaceholderService } from "./../../services/json-placeholder.service";
import { Component, OnInit } from "@angular/core";
declare const jQuery:any
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
    drawCallback:()=>{
        setTimeout(() => {
          const _this=this
          jQuery(".actionButton").each(function(index){
            const that = jQuery(this).attr("id")
            jQuery(this).unbind("click")
            jQuery(this).bind("click",function(){
              _this.actionButtonclick(that)
            })
          })
        });
    },
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
      {
        data: null,
        targets: 3,
        sortable: false,
        width:"20%",
        render:function(data,type,row){
          return `<button class='btn btn-danger actionButton' id="${data.id}">Action</button>`
        }
      },
    ],
  };
  showNewRow: boolean = false;
  dtRows = this.jsonPlaceHolder.getFakeData();

  add() {
    this.showNewRow = true;
  }
  addRow(){
    alert("Add row button clicked")
  }
  hide() {
    this.showNewRow = false;
  }
  ngOnInit() {}
  actionButtonclick(id){
    alert("id row = "+ id)
  }
}
