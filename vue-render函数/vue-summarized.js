1.����ģ���render����.
   function render() {//ģ���������Ϣ���ᱻ�˺�������;
        with(this){//�Լ�д����,������ʹ��.
            return _c(//��һ����dom
                'div'
           ,{//�ڶ�������������ֵ
                attrs:{
                    'id':'app'
                }
            },[//�������������ӽڵ����Ϣ
                _c('p',[_v(_s(price))])
            ] )
        }
    }
    <1.ģ�������е���Ϣ����ת����js����;
    <2.ģ���е�v-for,v-if,v-model ���Ҳ��ת������js����;

2.��Ӧʽ��ʼ����;
   var vm = {};
    var data = {
        title:"���",
        desc:'ֻ��һ���ʺ���!'
    }
    var key;
    for ( key in data) {
        //�հ�,����keyֵ,ʹ��ÿ��key����һ�������Ĺ�����;
        (function (key) {
            Object.defineProperty(vm,key,{

                set:function(newVal){
                  data[key]=newVal;
                },
                get:function(){
                    return data[key];
                }

            })


        })(key)
    }
  <1.object.defineProperty;
  <2.��data�������Ϣ����vm��;

3.�״���Ⱦ,��ʾҳ��,�Ұ�����.
  vm._update(vnode){
	var prevVnode = vm._vnode;
	vm._vnode = vnode;
	if(!prevVnode){
		vm.$el=vm._patch_($el,vnode);
	}else{
		vm.$el=vm.vm._patch_(prevVnode,vnode)
	}
  }

  function(){
	//vm._render()��Ϊ�����render����,���ص���vnode;
	vm._update(vm._render())
  }
  ע��:ʵ�ַ�ʽ��snabbdom�� h() vnode patch ������ʵ��ԭ������;
  <1.������Ⱦ,ִ��updateComponent,ִ��vm._render();
  <2.ִ��render����,����ʵ�vm.list��vm.title;
  <3.�ᱻ��Ӧʽ��get����������
	.ΪʲôҪ����get����,ֱ�Ӽ���set������?
         data���кܶ������,�еı��õ��еĲ����õ�,���õ���get����,
	 �����õ���Ҳ������get����,δ��get��setҲ����ȥ����.
	.Ŀ��:
	 ���ⲻ��Ҫ���ظ���Ⱦ;
		
	 
  <4.ִ��updateComponent,���ߵ�vDom��patch������
  <5.patch��vnode��Ⱦ��DOM,������Ⱦ���;
 
4.data���Ա仯,����rerender;
  <1.�޸�����,����Ӧʽ��set������;
  <2.set��ִ��updateComponent;
  <3.updateComponent����ִ��vm._render();
  <4.���ɵ�vnode��prevVnode,ͨ��patch���жԱ�;
  <5.��Ⱦ��html��;

����vue�Ŀ����ܽ�
.˵һ��ʹ��jQuery��ʹ�ÿ�ܵ�����;
	<1>���ݺ���ͼ�ķ���,����.
	<2>������������ͼ,ֻ�������ݱ仯,DOM�����·�װ;
.˵һ�¶�MVVM�����;
	<1>Model View ViewModel
	<2>���ߵ���ϵ,�Լ���Ӧ����Ӧ�Ĵ���Ƭ��;
	<3>ViewModel�����,����ϵModel��View������
.vue�����ʵ����Ӧʽ;
	<1>���Object.defineProperty
	<2>��data�����Դ���vm��;
.vue����ν���ģ��;
	<1>ģ��:�ַ���,���߼�,Ƕ��js����
	<2>ģ�����ת��Ϊjs����(���߼�.��ȾHTML.js����)
	<3>render����,����vnode;
	<4>updateComponent����
	<5>updateComponent�����е�patch����
.vue������ʵ������;
	<1>����ģ���render����
	<2>��Ӧʽ��ʼ����
	<3>������Ⱦ,��ʾҳ��,�Ұ�����
	<4>data���Ա仯,����rerender
