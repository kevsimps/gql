export declare class wxccTime {
    td: Date;
    fd: Date;
    toSelected: HTMLSelectElement;
    fromSelected: HTMLSelectElement;
    tTime: HTMLInputElement;
    tDate: HTMLInputElement;
    fTime: HTMLInputElement;
    fDate: HTMLInputElement;
    to: number;
    from: number;
    hide: boolean;
    onToSelect(zzz: string): void;
    onManSet(zzz: string): void;
    onToggle(): void;
    render(): any[];
}
