(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8aBz":function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return a}));var n=s("8Y7J"),i=s("Ckfk");class l{constructor(t){this.zone=t,this.onClose=new n.m}ngAfterViewInit(){this.initTimeout()}initTimeout(){this.message.sticky||this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message.life||3e3)})}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick(t){this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),t.preventDefault()}ngOnDestroy(){this.clearTimeout()}}class o{constructor(t,e){this.messageService=t,this.cd=e,this.autoZIndex=!0,this.baseZIndex=0,this.position="top-right",this.preventOpenDuplicates=!1,this.preventDuplicates=!1,this.showTransformOptions="translateY(100%)",this.hideTransformOptions="translateY(-100%)",this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="250ms ease-in",this.onClose=new n.m}ngOnInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(t instanceof Array){const e=t.filter(t=>this.canAdd(t));this.add(e)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let e=this.key===t.key;return e&&this.preventOpenDuplicates&&(e=!this.containsMessage(this.messages,t)),e&&this.preventDuplicates&&(e=!this.containsMessage(this.messagesArchieve,t)),e}containsMessage(t,e){return!!t&&null!=t.find(t=>t.summary===e.summary&&t.detail==e.detail&&t.severity===e.severity)}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"message":default:this.template=t.template}})}onMessageClose(t){this.messages.splice(t.index,1),this.onClose.emit({message:t.message}),this.cd.detectChanges()}onAnimationStart(t){"void"===t.fromState&&this.autoZIndex&&(this.containerViewChild.nativeElement.style.zIndex=String(this.baseZIndex+ ++i.b.zindex))}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe()}}class a{}},"O+Oc":function(t,e,s){"use strict";var n=s("AytR"),i=s("z6cu"),l=s("JIr8"),o=s("8Y7J"),a=s("IheW");s.d(e,"a",(function(){return r}));let r=(()=>{class t extends class{constructor(t){this.http=t}getBaseUrl(){return n.a.baseUrl}getBaseUrl_Img_Question(){return n.a.baseUrl_image}handleError(t){let e="Unknown error!";return e=t.error instanceof ErrorEvent?"Error: "+t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,window.alert(e),Object(i.a)(e)}}{constructor(){super(...arguments),this.login="login",this.colleges="college",this.users="users",this.roles="roles",this.quescategories="questioncategories",this.questionsList="questionslist",this.question="questions",this.exam="exam",this.uploadFile="fileupload",this.testresult="result",this.roleslist="roleslist",this.rolesexam="rolesexam",this.examsjson="assets/json/exam.json",this.students="assets/json/student.json",this.base=this.getBaseUrl(),this.questionImg=this.getBaseUrl_Img_Question()}getColleges(){return this.http.get(this.base+this.colleges)}getQuestions(){return this.http.get(this.base+this.questionsList)}getStudents(){return this.http.get(this.students)}getAssienExam(){return this.http.get(this.examsjson)}getUsers(){return this.http.get(this.base+this.users)}getRoles(){return this.http.get(this.base+this.roles)}getRolesList(){return this.http.get(this.base+this.roleslist)}getRolesExam(){return this.http.get(this.base+this.rolesexam)}getQuestionCategoriesList(){return this.http.get(this.base+this.quescategories)}getQuestionSubCategoriesWithId(t){return this.http.get(this.base+this.quescategories+"?id="+t)}getQuestionList(){return this.http.get(this.base+this.questionsList)}getExamList(){return this.http.get(this.base+this.exam)}getLogin(t){return console.log("api",t),this.http.post(this.base+this.login,t)}addCollege(t){return this.http.post(this.base+this.colleges,t)}addQuestion(t){return this.http.post(this.base+this.question,t)}addUser(t){return this.http.post(this.base+this.users,t)}addRole(t){return console.log("para",t),this.http.post(this.base+this.roles,t)}addCategorys(t){return this.http.post(this.base+this.quescategories,t)}addExam(t){return this.http.post(this.base+this.exam,t)}uploadQuesFile(t){const e=new FormData;return e.append("file",t),this.http.post(this.base+this.uploadFile,e).pipe(Object(l.a)(this.handleError))}updateCollegeWithId(t){return this.http.put(this.base+this.colleges+"?id="+t.id,t)}getCollegeWithId(t){return this.http.get(this.base+this.colleges+"?id="+t)}getQuesSubCategoryWithId(t){return this.http.get(this.base+this.quescategories+"?id="+t)}getUserWithId(t){return this.http.get(this.base+this.users+"?id="+t)}getTestResult(t){return console.log("result",t),this.http.get(this.base+this.testresult+"?code="+t.code+"&college="+t.college+"&date="+t.date+"&studentId="+t.studentId+"&result="+t.result)}deleteCollegeWithId(t){return this.http.delete(this.base+this.colleges+"?id="+t)}deleteUserWithId(t){return this.http.delete(this.base+this.users+"?id="+t)}deleteRoleWithId(t){return this.http.delete(this.base+this.roles+"?id="+t)}deleteCategoryWithId(t){return this.http.delete(this.base+this.quescategories+"?id="+t)}deleteExamWithId(t){return this.http.delete(this.base+this.exam+"?id="+t)}deleteQuestionsWithId(t){return this.http.delete(this.base+this.question+"?id="+t)}viewQuestionsWithId(t){return console.log("id",t),this.http.get(this.base+this.question+"?id="+t)}}return t.ngInjectableDef=o.Sb({factory:function(){return new t(o.Tb(a.c))},token:t,providedIn:"root"}),t})()},vHCZ:function(t,e,s){"use strict";s.d(e,"a",(function(){return m})),s.d(e,"b",(function(){return d}));var n=s("8Y7J"),i=s("8aBz"),l=s("SVse"),o=s("xCnN"),a=s("hhfa"),r=n.qb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"messageState",definitions:[{type:0,name:"visible",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{transform:"{{showTransformParams}}",opacity:0},offset:null},{type:4,styles:null,timings:"{{showTransitionParams}}"}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{height:0,opacity:0,transform:"{{hideTransformParams}}"},offset:null},timings:"{{hideTransitionParams}}"}],options:null}],options:{}}]}});function u(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,9,null,null,null,null,null,null,null)),(t()(),n.sb(1,0,null,null,3,"span",[],null,null,null,null,null)),n.Jb(512,null,l.F,l.G,[n.r,n.s,n.k,n.D]),n.rb(3,278528,null,0,l.k,[l.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n.Hb(4,{"pi-info-circle":0,"pi-exclamation-triangle":1,"pi-times-circle":2,"pi-check":3}),(t()(),n.sb(5,0,null,null,4,"div",[["class","p-toast-message-text"]],null,null,null,null,null)),(t()(),n.sb(6,0,null,null,1,"div",[["class","p-toast-summary"]],null,null,null,null,null)),(t()(),n.Mb(7,null,["",""])),(t()(),n.sb(8,0,null,null,1,"div",[["class","p-toast-detail"]],null,null,null,null,null)),(t()(),n.Mb(9,null,["",""]))],(function(t,e){var s=e.component,n="p-message-icon pi"+(s.message.icon?" "+s.message.icon:""),i=t(e,4,0,"info"==s.message.severity,"warn"==s.message.severity,"error"==s.message.severity,"success"==s.message.severity);t(e,3,0,n,i)}),(function(t,e){var s=e.component;t(e,7,0,s.message.summary),t(e,9,0,s.message.detail)}))}function h(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,2,"button",[["class","p-toast-icon-close p-link"],["pRipple",""],["type","button"]],[[2,"p-ripple",null]],[[null,"click"],[null,"keydown.enter"]],(function(t,e,s){var n=!0,i=t.component;return"click"===e&&(n=!1!==i.onCloseIconClick(s)&&n),"keydown.enter"===e&&(n=!1!==i.onCloseIconClick(s)&&n),n}),null,null)),n.rb(1,4341760,null,0,o.a,[n.k,n.y,[2,a.e]],null,null),(t()(),n.sb(2,0,null,null,0,"span",[["class","p-toast-icon-close-icon pi pi-times"]],null,null,null,null,null))],null,(function(t,e){t(e,0,0,!0)}))}function p(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(t){return n.Ob(2,[n.Kb(402653184,1,{containerViewChild:0}),(t()(),n.sb(1,0,[[1,0],["container",1]],null,12,"div",[["class","p-toast-message"]],[[1,"id",0],[24,"@messageState",0]],[[null,"mouseenter"],[null,"mouseleave"]],(function(t,e,s){var n=!0,i=t.component;return"mouseenter"===e&&(n=!1!==i.onMouseEnter()&&n),"mouseleave"===e&&(n=!1!==i.onMouseLeave()&&n),n}),null,null)),n.Jb(512,null,l.F,l.G,[n.r,n.s,n.k,n.D]),n.rb(3,278528,null,0,l.k,[l.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n.Hb(4,{showTransformParams:0,hideTransformParams:1,showTransitionParams:2,hideTransitionParams:3}),n.Hb(5,{value:0,params:1}),(t()(),n.sb(6,0,null,null,7,"div",[["aria-atomic","true"],["aria-live","assertive"],["class","p-toast-message-content"],["role","alert"]],null,null,null,null,null)),(t()(),n.hb(16777216,null,null,1,null,u)),n.rb(8,16384,null,0,l.m,[n.O,n.L],{ngIf:[0,"ngIf"]},null),(t()(),n.hb(16777216,null,null,1,null,h)),n.rb(10,16384,null,0,l.m,[n.O,n.L],{ngIf:[0,"ngIf"]},null),(t()(),n.hb(16777216,null,null,2,null,p)),n.rb(12,540672,null,0,l.s,[n.O],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),n.Hb(13,{$implicit:0})],(function(t,e){var s=e.component;t(e,3,0,"p-toast-message","p-toast-message-"+s.message.severity),t(e,8,0,!s.template),t(e,10,0,!1!==s.message.closable);var n=t(e,13,0,s.message);t(e,12,0,n,s.template)}),(function(t,e){var s=e.component,n=s.message.id,i=t(e,5,0,"visible",t(e,4,0,s.showTransformOptions,s.hideTransformOptions,s.showTransitionOptions,s.hideTransitionOptions));t(e,1,0,n,i)}))}var m=n.qb({encapsulation:2,styles:[".p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{align-items:flex-start;display:flex}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{right:20px;top:20px}.p-toast-top-left{left:20px;top:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{left:50%;margin-left:-10em;top:20px}.p-toast-bottom-center{bottom:20px;left:50%;margin-left:-10em}.p-toast-center{left:50%;min-width:20vw;top:50%;transform:translate(-50%,-50%)}.p-toast-icon-close{align-items:center;display:flex;justify-content:center;overflow:hidden;position:relative}.p-toast-icon-close.p-link{cursor:pointer}"],data:{animation:[{type:7,name:"toastAnimation",definitions:[{type:1,expr:":enter, :leave",animation:[{type:11,selector:"@*",animation:{type:9,options:null},options:null}],options:null}],options:{}}]}});function g(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,1,"p-toastItem",[],[[24,"@toastAnimation",0]],[[null,"onClose"],[null,"@toastAnimation.start"]],(function(t,e,s){var n=!0,i=t.component;return"onClose"===e&&(n=!1!==i.onMessageClose(s)&&n),"@toastAnimation.start"===e&&(n=!1!==i.onAnimationStart(s)&&n),n}),c,r)),n.rb(1,4374528,null,0,i.b,[n.y],{message:[0,"message"],index:[1,"index"],template:[2,"template"],showTransformOptions:[3,"showTransformOptions"],hideTransformOptions:[4,"hideTransformOptions"],showTransitionOptions:[5,"showTransitionOptions"],hideTransitionOptions:[6,"hideTransitionOptions"]},{onClose:"onClose"})],(function(t,e){var s=e.component;t(e,1,0,e.context.$implicit,e.context.index,s.template,s.showTransformOptions,s.hideTransformOptions,s.showTransitionOptions,s.hideTransitionOptions)}),(function(t,e){t(e,0,0,void 0)}))}function d(t){return n.Ob(2,[n.Kb(402653184,1,{containerViewChild:0}),(t()(),n.sb(1,0,[[1,0],["container",1]],null,6,"div",[],null,null,null,null,null)),n.Jb(512,null,l.F,l.G,[n.r,n.s,n.k,n.D]),n.rb(3,278528,null,0,l.k,[l.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n.Jb(512,null,l.H,l.I,[n.k,n.s,n.D]),n.rb(5,278528,null,0,l.p,[l.H],{ngStyle:[0,"ngStyle"]},null),(t()(),n.hb(16777216,null,null,1,null,g)),n.rb(7,278528,null,0,l.l,[n.O,n.L,n.r],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var s=e.component;t(e,3,0,s.styleClass,"p-toast p-component p-toast-"+s.position),t(e,5,0,s.style),t(e,7,0,s.messages)}),null)}}}]);