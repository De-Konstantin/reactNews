export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export type CategoryType = string;

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
