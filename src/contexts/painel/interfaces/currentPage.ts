export interface ICurrentPage {
  header: ICurrentPageHeader
  sidebar: {
    btnActive: string
  }
}

export interface ICurrentPageHeader {
  title: string
  subTitle: string
}
