import { Component, OnInit } from '@angular/core';
import { CustomEditorComponent } from '../custom-editor/custom-editor.component';

@Component({
  selector: 'app-table-d',
  templateUrl: './table-d.component.html',
  styleUrls: ['./table-d.component.css']
})
export class TableDComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      link: '<a href="https://youtube.com">Youtube</a>',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
    },
  ];
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: {
          type: 'custom',

        }
      },
      name: {
        title: 'Full Name',
        type: 'custom',

      },
      username: {
        title: 'User Name',
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
    },
  };

}

