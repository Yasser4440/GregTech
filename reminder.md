### Commands:
- node build ::: Builds the addons and puts them into the output folder
- node build run ::: Builds the addons and puts them inside minecraft
- node build remove ::: Removes the addons from minecraft
- node build delete ::: Alias for node build remove
- node build release ::: Builds the addons as an mcpack

### File Structure:
- addon ::: contains the manifest and icon for the addon
- assets ::: contains the folders that are copied to the behavior pack and resource pack as is
- debug ::: contains folders that are copied to the behavior pack and resource pack for testing
- resources ::: contains files that used to generate files and are not part of the resource pack
- scripts ::: contains the build scripts for the addon and generated files
- source ::: contains the logic and data scripts used by the build scripts