import { TDataDosen } from "src/types/types";

export class PaginationScrapperDTO {
    page: number;
    per_page: number;
    total: number;
    entries: number;
    search: string;
    data: TDataDosen[];
}