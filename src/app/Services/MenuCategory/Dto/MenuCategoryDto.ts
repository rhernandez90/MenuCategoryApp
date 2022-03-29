
export class MenuCategoryDto {
    id: number;
    mainCategory: boolean;
    description: string;
    role: string;
    parentCategoryId: number | null;
}