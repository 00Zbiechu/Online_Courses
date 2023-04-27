import { Course } from "./Course"
import { Sort } from "./Sort"

export interface Page {
    content: Course[]
    pageable: string
    last: boolean
    totalElements: number
    totalPages: number
    size: number
    number: number
    sort: Sort
    first: boolean
    numberOfElements: number
    empty: boolean
}