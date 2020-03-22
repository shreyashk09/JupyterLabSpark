import {
  ILayoutRestorer, JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

//import {
//  PageConfig
//} from '@jupyterlab/coreutils';


import {
  ICommandPalette, MainAreaWidget, IFrame
} from '@jupyterlab/apputils';
/*
import {
  Widget
} from '@lumino/widgets';
*/

import {
  ReadonlyJSONObject
} from '@phosphor/coreutils';


import {
  toArray
} from '@phosphor/algorithm';


/**
 * Initialization data for the JupyterSparkExt extension.
 */

const extension: JupyterFrontEndPlugin<void> = {
  id: 'JupyterSparkExt',
  requires: [ICommandPalette, ILayoutRestorer],
  autoStart: true,
  activate
  
};

namespace CommandIDs {
    export const run = 'sparkui:run';
}

function activate (app: JupyterFrontEnd, palette: ICommandPalette): void {
    console.log('JupyterLab extension JupyterSparkExt is activated!');
    console.log('ICommandPalette:', palette);
const {commands, shell} = app;
    console.log("in activate");

    commands.addCommand(CommandIDs.run, {
        label: 'spark UI',
        execute: (args: ReadonlyJSONObject) => {


            const sparkWidget = new SparkUI(app);

            sparkWidget.title.label = 'Open Spark UI';

            let main = new MainAreaWidget({content: sparkWidget});
            main.id = 'JupyterSparkExt';

            // If there are any other widgets open, remove the launcher close icon.
            main.title.closable = !!toArray(shell.widgets('main')).length;

            shell.add(main, 'main');
            shell.activateById(main.id);

            

            return main;
        }

    });
    palette.addItem({command: CommandIDs.run, category: 'Jupyter Spark Widgets'});
}
    


  class SparkUI extends IFrame {
    html:string;
    constructor(app: JupyterFrontEnd) {
        super();
        this.url = './export.html';
    }

}


export default extension;



