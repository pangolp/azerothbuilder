<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">Creature Text Locale</li>
            </ol>
        </nav>
        <form>
            <div class="row">
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="CreatureIDInput">CreatureID</label>
                        <input type="number" class="form-control" id="CreatureIDInput" aria-describedby="CreatureIDInput" v-model="CreatureTextLocale.CreatureID">
                        <small id="CreatureIDInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="GroupIDInput">GroupID</label>
                        <input type="number" class="form-control" id="GroupIDInput" aria-describedby="GroupIDInput" v-model="CreatureTextLocale.GroupID">
                        <small id="GroupIDInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="IdInput">ID</label>
                        <input type="number" class="form-control" id="IdInput" aria-describedby="IdInput" v-model="CreatureTextLocale.ID">
                        <small id="IdInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="localeFormControlSelect">Locale</label>
                        <select class="form-control" id="localeFormControlSelect" v-model="CreatureTextLocale.Locale">
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
                        <label for="TextInput">Text</label>
                        <textarea class="form-control" id="TextInput" rows="3" v-model="CreatureTextLocale.Text"></textarea>
                        <small id="TextInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
        </form>
        <code id="code">
            <div>
                <span>DELETE FROM</span> `creature_text_locale` <span>WHERE</span> `CreatureID`={{ CreatureTextLocale.CreatureID }} <span>AND</span> `GroupID`={{ CreatureTextLocale.GroupID }} <span>AND</span> `ID`={{ CreatureTextLocale.ID }} <span>AND</span> `locale`="{{ CreatureTextLocale.Locale }}";
            </div>
            <div>
                <span>INSERT INTO</span> `creature_text_locale` (`CreatureID`, `GroupID`, `ID`, `Locale`, `Text`) <span>VALUES</span>
            </div>
            <div>
                <span class="reset">({{ CreatureTextLocale.CreatureID }}, {{ CreatureTextLocale.GroupID }}, {{ CreatureTextLocale.ID }}, "{{ CreatureTextLocale.Locale }}", "{{ CreatureTextLocale.Text }}");</span>
            </div>
        </code>
    </div>
</template>

<script>
export default {
    name: 'CreatureTextLocale',
    data() {
        return {
            CreatureTextLocale : {
                CreatureID: 0,
                GroupID: 0,
                ID: 0,
                Locale: '',
                Text: ''
            }
        }
    },
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
