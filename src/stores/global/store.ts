import { observable, IObservableArray } from 'mobx'
import BaseStore from '../BaseStore'

export default class Store extends BaseStore {

  // 是否登陆标志
  @observable public isLogin: boolean = false

  // 是否收缩侧边菜单栏
  @observable public collapsed: boolean = false

  // 菜单变化 面包更改
  @observable public breadcrumbList: IObservableArray<{ title: string, url?: string }> = [] as any
}