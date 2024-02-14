export declare class SideDrawer {
    showNav: boolean;
    arttitle: string;
    opened: boolean;
    content: any;
    lessons: {
        title: string;
        url: string;
    }[];
    currentPage: any;
    lList: string;
    componentWillLoad(): Promise<void>;
    onContentChange(content: string): void;
    onToggle(event: CustomEvent): void;
    onNext(event: CustomEvent): void;
    onChoice(url: any): void;
    getHTML(url: any): Promise<string>;
    render(): any[];
}
