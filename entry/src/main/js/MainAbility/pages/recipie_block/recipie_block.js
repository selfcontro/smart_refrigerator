/*
 * Copyright (c) 2022 Application Library Engineering Group.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
    data: {
        //      I M A G E S
        bg: "/common/images/bg.png",
        recepie_bg: "/common/images/recepie_bg.png",
        favourite_active: '/common/images/favourite_active.png',
        favourite_inactive: '/common/images/favourite_inactive.png',
        clock: '/common/images/clock.png',
    },
    props:{
        user_reaction:"",
        favourite_icon:"",
        recp_name: '',
        recp_type: '',
        time_recp: '',
        recp_image: '',

    },
    onInit() {
        if(this.user_reaction == "true"){
            this.favourite_icon=this.favourite_active;
        }
        else if (this.user_reaction == "false"){
            this.favourite_icon=this.favourite_inactive;
        }
    },
    user_reaction_listner: function(){
        if(this.user_reaction == "true"){
            this.user_reaction = "false";
            this.favourite_icon=this.favourite_inactive;
        }
        else if(this.user_reaction == "false"){
            this.user_reaction = "true";
            this.favourite_icon=this.favourite_active;
        }
    }


}
