import { Directive, Input, ElementRef } from "@angular/core";
declare const jQuery: any;
@Directive({
  selector: "[DataTableDirective]",
})
export class DataTableDirective {
  @Input("dtOptions")
  dtOptions;
  @Input("dtRows")
  set dtRows(rows) {
    if (rows != null) {
      if (this.table != null && this.table != undefined) {
        this.table.clear().draw();
        this.table.rows.add(rows).draw();
      } else {
        this.rows = rows;
        this.alternator = true;
      }
    }
  }
  @Input("fixedHeader")
  fixedHeader: boolean = false;
  tableRef: ElementRef;
  table: any;
  rows: any;
  alternator: boolean = false;
  constructor(el: ElementRef) {
    this.tableRef = el;
  }
  ngOnInit() {
    this.table = jQuery(this.tableRef.nativeElement).DataTable(this.dtOptions);
    this.fixedHeader ? new jQuery.fn.dataTable.FixedHeader(this.table) : null;
    if (this.alternator) {
      this.table.rows.add(this.rows).draw();
      this.alternator = false;
    }
  }
}
