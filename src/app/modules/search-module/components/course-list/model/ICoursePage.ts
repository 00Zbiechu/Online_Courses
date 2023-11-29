import { ICourseForList } from "./ICourseForList";
import { IPageable } from "./IPageable";

export interface ICoursePage {
  content: ICourseForList[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}