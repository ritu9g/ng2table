import { Component, OnInit } from '@angular/core';
import { CustomEditorComponent } from '../custom-editor/custom-editor.component';
// import { CustomRenderComponent } from '../custom-render/custom-render.component';
// import { CustomFilterComponent } from '../custom-filter/custom-filter.component';

@Component({
  selector: 'app-table-d',
  templateUrl: './table-d.component.html',
})
export class TableDComponent {


  data = [
    {
      id: 1,
      name: 'Youtube',
      username: 'link',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 1,
      name: 'Timon & pumba',
      username: 'tp',
      link: '<a href="https://www.youtube.com/watch?v=mzABW42AIhM">Youtube-timon</a>',
    },
      {id: 2,
      name: 'Motu-Patlu',
      username: 'mp',
      link: '<a href="https://www.youtube.com/watch?v=-kw8p_3pru8">Youtube-motu</a>',
    },
      {id: 3,
      name: 'Tom & Jerry',
      username: 'tj',
      link: '<a href="https://www.youtube.com/watch?v=BEYzwfMuKiM">Youtube-jerry</a>',
    },
  {
      id: 4,
      name: 'Pokemon',
      username: 'pm',
      link: '<a href="https://www.youtube.com/watch?v=3QSPHNPUV8Q">Youtube-pokemon</a>',
    },

  ];
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: {
          type: 'custom',
          // component: CustomFilterComponent
        }
      },

      name: {
        title: 'Full Name',
        type: 'string',
        // type: 'custom',
        // renderComponent: CustomRenderComponent,

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

