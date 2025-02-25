import { TextComponent } from "obsidian";

export class FileSuggest {
    textInputEl: HTMLInputElement;

    constructor(inputEl: HTMLInputElement) {
        this.textInputEl = inputEl;
    }

    selectSuggestion(item: string): void {
        const input = this.textInputEl;
        const value = item;
        
        // 更新输入框的值为选中的目录路径
        input.value = value;
        input.dispatchEvent(new Event('input'));
        
        // 将光标移动到末尾
        const len = input.value.length;
        input.setSelectionRange(len, len);
    }

    // ... existing code ...
}