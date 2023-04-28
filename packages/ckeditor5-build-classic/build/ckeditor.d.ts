/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
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
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableCellProperties, TableProperties, TableToolbar, TableCaption, TableColumnResize } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Alignment | typeof TextTransformation | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Paragraph | typeof Heading | typeof Title | typeof Autoformat | typeof AutoLink | typeof Link | typeof LinkImage | typeof BlockQuote | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof CodeBlock | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof HorizontalLine | typeof Indent | typeof IndentBlock | typeof List | typeof ListProperties | typeof TodoList | typeof MediaEmbed | typeof Mention | typeof PasteFromOffice | typeof RemoveFormat | typeof SpecialCharacters | typeof SpecialCharactersEssentials | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar)[];
    static defaultConfig: {};
}
