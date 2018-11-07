/**
 * vue 进行组件间的传值方式;
 * 1.vue的自定义组件的两种方式:
 *  .全局声明自定义组件:
 *      Vue.component('自定义组件的名称(ListItem)',{
 *          props:['父组件定义的需要传递的值的名称'],
 *          template:'自定义组件的模板',
 *          methods:{
 *              子组件如何向父组件传递
 *               通过this.$emit('父组件接受的信号(delete)')
 *          }
 *      })
 *     .局部声明自定义组件:
 *          var listItem = {
 *              props:['父组件定义的需要传递的值的名称'],
 *              template:'自定义组件的模板',
 *              methods:{
 *                  子组件如何向父组件传递
 *                  通过this.$emit('父组件接受的信号(delete)')
 *              }
 *            }
 * 
 *      .在父组件的数据M中的写法
 *          var vm = new Vue({//实例化vue 
 *              el:"vue作用域的id""
 *              data:{
 *              },
 *              components:{
 *                  ListItem:listItem
 *              },
 *              methods:{
 * 
 *              }
 *           })
 *       
 *      .在父组件视图中如何使用:
 *          <list-item  
 *              v:bind:content="需要传递的值的变量"
 *              @delete="在父组件声明的方法(handleItem)"
 *           ></list-item>
 */

/*
    angular4+自定义组件
        .组件声明完成后,如果需要引入组件,在该.html中通过<app-组件名称></app-组件名称>即可饮用
            例如:
             <app-project-item 
                *ngFor="let project of (projects$ | async);let i = index"
                [item]="project"
                class="card"
                (invite)="openInviteDialog(project)"
                (editProject)="openEditDialog(project)"
                (deleteProject)="openConfirmDialog(project)"
                (selected)="openTaskListPage(project)"
                ></app-project-item>

        .父组件向子组件传递参数
        <app-project-item 
                *ngFor="let project of (projects$ | async);let i = index"
                [item]="project"//通过此表达式将该组件的project绑定在 app-project-item中
                >
        .在子组件中如何接受父组件传递的信息
        在子组件中引入:
            import {Input} from '@angular/core';
        在子组件的类中声明:
            export class ChildrenItemComponent implements OnInit{
                onInit(){
                    //实现该方法
                }
                @Input('可以修改传递过来的值的名字') Item;通过这个方法将接收到父组件通过[item]="project"传递过来的project的值

            }

        .子组件向父组件传递信息:
        在子组件中引入
        import { Output, EventEmitter } from '@angular/core';
        在子组件的类中声明:
            export class ChildrenItemComponent implements OnInit{
                onInit(){
                    //实现该方法
                }
                @OutPut() invite = new EventEmitter<void>();

                handleClick(){
                    this.invite.emit();将子组件的信息发送出去;
                }
            }
        在父组件视图中接收信息
        <app-project-item 
                *ngFor="let project of (projects$ | async);let i = index"
                class="card"
                (invite)="openInviteDialog(project)"
                ></app-project-item>;
        在父组件的数据模板中(.ts文件中)的类中声明openInviteDialog方法
             export class ParentItemComponent implements OnInit{
                onInit(){
                    //实现该方法
                }
                @OutPut() invite = new EventEmitter<void>();

                openInviteDialog(){
                    
                }
            }
*/   