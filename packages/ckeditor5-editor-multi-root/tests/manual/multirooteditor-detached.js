/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console:false, document, window */

import MultiRootEditor from '../../src/multirooteditor';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

const editorData = {
	intro: '<p><strong>Exciting</strong> intro text to an article.</p>',
	content: '<h2>Exciting news!</h2><p>Lorem ipsum dolor sit amet.</p>',
	outro: '<p>Closing text.</p>'
};
let editor;

function initEditor() {
	MultiRootEditor
		.create( editorData, {
			plugins: [ Enter, Typing, Paragraph, Undo, Heading, Bold, Italic ],
			toolbar: [ 'heading', '|', 'bold', 'italic', 'undo', 'redo' ]
		} )
		.then( newEditor => {
			console.log( 'Editor was initialized', newEditor );

			document.querySelector( '.toolbar-container' ).appendChild( newEditor.ui.view.toolbar.element );
			document.querySelector( '.editable-container' ).appendChild( newEditor.ui.getEditableElement( 'intro' ) );
			document.querySelector( '.editable-container' ).appendChild( newEditor.ui.getEditableElement( 'content' ) );
			document.querySelector( '.editable-container' ).appendChild( newEditor.ui.getEditableElement( 'outro' ) );

			window.editor = editor = newEditor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
}

function destroyEditor() {
	editor.destroy()
		.then( () => {
			editor.ui.view.toolbar.element.remove();

			for ( const editable of Object.values( editor.ui.view.editables ) ) {
				editable.element.remove();
			}

			window.editor = editor = null;

			console.log( 'Editor was destroyed' );
		} );
}

document.getElementById( 'initEditor' ).addEventListener( 'click', initEditor );
document.getElementById( 'destroyEditor' ).addEventListener( 'click', destroyEditor );
