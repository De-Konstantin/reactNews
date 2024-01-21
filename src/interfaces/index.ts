export interface INews{
	author: string;
	category: CategoryType[];
	description: string;
	id:string;
	image: string;
	language: string;
	published:string;
	title: string|number|null;
url:string
}

export interface IFilters {
	page_number: number;
	page_size: number;
	category: CategoryType|null;
	keywords: string

}

export interface IPaginationProps {
	totalPages: number;
  handlePrevisiousPage:()=>void;
  handleNextPage:()=>void;
  handlePageClick:(page:number)=>void;
  currentPage:number,
}
export type ParamsType = Partial<IFilters>;
export type SkeletonType = 'banner'|'item'
export type DirectionType = 'row'|'column'
export interface NewsApiResponse{
	news:INews[];
	page:number;
	 status:string
}

export interface CategoriesApiResponse{
	categories:CategoryType[];
	description:string;
	 status:string
}


export type CategoryType = string 



export type CategoriesType =
|'regional'|'technology'|"lifestyle"|"business"|"general"|'programming'|'science'|'entertainment'|'enter'|'world'|'sports'|'finance'|'academia'|'politics'|'health'|'opinion'

// export interface IBanner{
// 	description: string;
// 	id:NewsId;
// 	image: string;
// 	title: string;
// 	url:UrlType;
// }
// const news{
// 	author: "ruslan";
// 	category:['all'];
// 	description: 'typescript';
// 	id:1;
// 	image: null;
// 	language: 'ru';
// 	published:'yes';
// 	title: 'ts';
// url:''
// }

// type NewsType = typeof news  // определение типа на основе news

// export type ItemTepe = INews|IBanner   //Обьеденение типов
// export type ItemTepe2 = INews&IBanner   // пересечение типов


