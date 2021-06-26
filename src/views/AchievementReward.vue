<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">Achievement Reward Locale</li>
            </ol>
        </nav>
        <form class="my-4">
            <div class="row">
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="IdInput">ID</label>
                        <input type="text" class="form-control" id="IdInput" aria-describedby="IdInput" v-model="AchievementReward.ID">
                        <small id="IdInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="localeFormControlSelect">Locale</label>
                        <select class="form-control" id="localeFormControlSelect" v-model="AchievementReward.Locale">
                            <option>koKR</option>
                            <option>frFR</option>
                            <option>deDE</option>
                            <option>zhCN</option>
                            <option>zhTW</option>
                            <option>esES</option>
                            <option>esMX</option>
                            <option>ruRU</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="SubjectInput">Subject</label>
                        <textarea class="form-control" id="SubjectInput" rows="3" v-model="AchievementReward.Subject"></textarea>
                        <small id="SubjectInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="TextInput">Text</label>
                        <textarea class="form-control" id="TextInput" rows="3" v-model="AchievementReward.Text"></textarea>
                        <small id="TextInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-warning" v-on:click="cleanForm">Clear form</button>
        </form>
        <code id="code">
            <div>
                <span>DELETE FROM</span> `achievement_reward_locale` <span>WHERE</span> `ID`={{ AchievementReward.ID }} <span>AND</span> `Locale`="{{ AchievementReward.Locale }}";
            </div>
            <div>
                <span>INSERT INTO</span> `achievement_reward_locale` (`ID`, `Locale`, `Subject`, `Text`) <span>VALUES</span>
            </div>
            <div>
                <span class="reset">({{ AchievementReward.ID }}, "{{ AchievementReward.Locale }}", "{{ AchievementReward.Subject }}", "{{ AchievementReward.Text }}");</span>
            </div>
        </code>
    </div>
</template>

<script>
export default {
    name: 'AchievementReward',
    data() {
        return {
            AchievementReward : {
                ID: 0,
                Locale: '',
                Subject: '',
                Text: ''
            }
        }
    },
    methods: {
        cleanForm: function () {
            this.AchievementReward.ID = 0,
            this.AchievementReward.Locale = '',
            this.AchievementReward.Subject = '',
            this.AchievementReward.Text = ''
        }
    }
}
</script>

<style scoped>
  code {
    color: #000;  
  }

  code span {
    color: #00F;
  }


  #code p {
    padding: 0;
    margin: 0;
  }

  form {
    padding-top: 1em;
  }

  .reset
  {
    color: #000;
  }
</style>
