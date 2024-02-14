import { EventEmitter } from "../../stencil-public-runtime";
export declare class PageControls {
    wxccGuidePageTurn: EventEmitter<string>;
    toggleGuide: EventEmitter<string>;
    wxccTimeWidget: EventEmitter<string>;
    wxccAuthPop: EventEmitter<string>;
    vidPop: EventEmitter<string>;
    currentPage: string;
    lessons: {
        title: string;
        address: string;
    }[];
    onToggleGuide(): void;
    onNext(): void;
    onBack(): void;
    onTimeWidget(): void;
    render(): any;
}
