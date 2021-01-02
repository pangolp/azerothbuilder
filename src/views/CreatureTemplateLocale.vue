<template>
	<div>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
				<li class="breadcrumb-item active" aria-current="page">Creature Template Locale</li>
			</ol>
		</nav>
		<form>
			<div class="row">
				<div class="col-12 col-md">
					<div class="form-group">
						<label for="IdInput">entry</label>
						<input type="number" class="form-control" id="IdInput" aria-describedby="IdInput" v-model="CreatureTemplateLocale.entry">
						<small id="IdInput" class="form-text text-muted"></small>
					</div>
				</div>
				<div class="col-12 col-md">
					<div class="form-group">
						<label for="localeFormControlSelect">Locale</label>
						<select class="form-control" id="localeFormControlSelect" v-model="CreatureTemplateLocale.locale">
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
						<label for="NameInput">Name</label>
                        <input type="text" class="form-control" id="NameInput" aria-describedby="NameInput" v-model="CreatureTemplateLocale.Name">
						<small id="NameInput" class="form-text text-muted"></small>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md">
					<div class="form-group">
						<label for="TitleInput">Title</label>
                        <input type="text" class="form-control" id="TitleInput" aria-describedby="TitleInput" v-model="CreatureTemplateLocale.Title">
						<small id="TitleInput" class="form-text text-muted"></small>
					</div>
				</div>
			</div>
            <div class="row">
				<div class="col-md-12 col-md">
					<div class="form-group">
						<label for="VerifiedBuildNumberInput">Verified Build</label>
						<input type="number" class="form-control" id="VerifiedBuildNumberInput" aria-describedby="VerifiedBuildNumberInput" placeholder="" v-model="CreatureTemplateLocale.VerifiedBuild">
						<small id="VerifiedBuildNumberInput" class="form-text text-muted"></small>
					</div>
				</div>
			</div>
		</form>
		<code id="code">
			<div>
				<span>DELETE FROM</span> `creature_template_locale` <span>WHERE</span> `entry`={{ CreatureTemplateLocale.entry }} <span>AND</span> `locale`="{{ CreatureTemplateLocale.locale }}";
			</div>
			<div>
				<span>INSERT INTO</span> `creature_template_locale` (`entry`, `locale`, `Name`, `Title`, `VerifiedBuild`) <span>VALUES</span>
			</div>
			<div>
				<span class="reset">({{ CreatureTemplateLocale.entry }}, "{{ CreatureTemplateLocale.locale }}", "{{ CreatureTemplateLocale.Name }}", "{{ CreatureTemplateLocale.Title }}", {{ CreatureTemplateLocale.VerifiedBuild }});</span>
			</div>
		</code>
	</div>
</template>

<script>
export default {
    name: 'CreatureTemplateLocale',
    data() {
        return {
            CreatureTemplateLocale : {
                entry: 0,
                locale: '',
                Name: '',
                Title: '',
                VerifiedBuild: 18019
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
