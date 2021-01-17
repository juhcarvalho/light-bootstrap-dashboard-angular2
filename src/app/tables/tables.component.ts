import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: (string | boolean)[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Atividade', 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
          dataRows: [
              ['Caminhar', true, true, true, false, false, false, true],
              ['Meditar',false, true, false,true, false, false, false],
              ['Lista de Gratidão', false, true, true,false, true,false, true],
              ['2L de Água', true, true, true,false, true,false,false],
              ['Ler 4 pág. do livro', true, true, true,false, true,false,true],
              ['Estudar 30 minutos', true, false, false,false, true,false,false]
          ]
      };
      
      this.tableData2 = {
        headerRow: [ 'Atividade', 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dataRows: [
            ['Caminhar', true, true, true, false, false, false, true],
            ['Meditar',false, true, false,true, false, false, false],
            ['Lista de Gratidão', false, true, true,false, true,false, true],
            ['2L de Água', true, true, true,false, true,false,false],
            ['Ler 4 pág. do livro', true, true, true,false, true,false,true],
            ['Estudar 30 minutos', true, false, false,false, true,false,false]
        ]
      };
  }

}
