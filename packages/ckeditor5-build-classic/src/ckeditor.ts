/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
// import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import { AIAssistant, OpenAITextAdapter } from '@ckeditor/ckeditor5-ai';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
// import HtmlEmbed from '@ckeditor/ckeditor5-html-embed';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
// import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableCellProperties, TableProperties, TableToolbar, TableCaption, TableColumnResize } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

import emojiIcon from '../theme/icons/qyEmoji.svg';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

class QyEmojiPlugin extends Plugin {
	public init(): void {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'qyEmojiPlugin', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Emoji',
				icon: emojiIcon,
				tooltip: true
			} );

			// Callback executed once the icon is clicked
			view.on( 'execute', () => {
				// fire a JS event
				window.dispatchEvent( new CustomEvent( 'qy-ckeditor-emoji-clicked', { detail: { ckEditorParam: editor } } ) );
			} );

			return view;
		} );
	}
}

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		AIAssistant,
		OpenAITextAdapter,
		Alignment,
		AutoImage,
		Autoformat,
		AutoLink,
		BlockQuote,
		Bold,
		Code,
		CodeBlock,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		HorizontalLine,
		// HtmlEmbed,
		Image,
		ImageCaption,
		ImageInsert,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		// MediaEmbedToolbar,
		Mention,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		SpecialCharacters,
		SpecialCharactersEssentials,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCellProperties,
		TableProperties,
		TableToolbar,
		TableCaption,
		TableColumnResize,
		Title,
		TextTransformation,
		TodoList,
		Underline,

		QyEmojiPlugin
	];

	public static override defaultConfig = {
		//		toolbar: {
		//			items: [
		//				'heading',
		//				'|',
		//				'bold',
		//				'italic',
		//				'link',
		//				'bulletedList',
		//				'numberedList',
		//				'|',
		//				'outdent',
		//				'indent',
		//				'|',
		//				'uploadImage',
		//				'blockQuote',
		//				'insertTable',
		//				'mediaEmbed',
		//				'undo',
		//				'redo'
		//			]
		//		},
		//		image: {
		//			toolbar: [
		//				'imageStyle:inline',
		//				'imageStyle:block',
		//				'imageStyle:side',
		//				'|',
		//				'toggleImageCaption',
		//				'imageTextAlternative'
		//			]
		//		},
		//		table: {
		//			contentToolbar: [
		//				'tableColumn',
		//				'tableRow',
		//				'mergeTableCells'
		//			]
		//		},
		//		// This value must be kept in sync with the language defined in webpack.config.js.
		//		language: 'en'
	};
}
