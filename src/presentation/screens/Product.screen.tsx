import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import useProduct from '../hooks/useProduct';
import tw from '../../application/libs/tailwind/Tailwind.instance';
import BottomNavbar from '../components/organisms/BottomNavbar.oragnism';
import SearchInput from '../components/molecules/SearchInput.molecule';
import FloatingButton from '../components/molecules/FloatingButton.molecule';
import {
  ArrowDownTrayIcon,
  ChevronLeftIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusIcon,
  ShareIcon,
  TrashIcon,
} from 'react-native-heroicons/outline';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ModalConfirmationDelete from '../components/organisms/ModalConfirmationDelete.organism';

const Product = () => {
  const {
    checkedItem,
    isCheckMode,
    showModalDelete,
    onChecked,
    toggleIsCheckMode,
    toggleShowModalDelete,
    navigateToCreateProduct,
    navigateToDetailProduct,
    navigateToUpdateBuikProduct,
    navigateToShareProductCatalog,
  } = useProduct();

  const _renderMenuNormalMode = () => {
    return (
      <>
        <Text style={tw`font-primary--semibold text-xl text-white`}>
          Product
        </Text>
        <Menu>
          <MenuTrigger>
            <EllipsisVerticalIcon style={tw`text-white`} />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: tw`p-2 mt-8 w-auto rounded-lg rounded-tr-none`,
            }}>
            <MenuOption
              onSelect={() => navigateToShareProductCatalog()}
              style={tw`flex-row items-center gap-3`}>
              <ShareIcon style={tw`text-slate-800`} size={18} />
              <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                Share Catalog
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </>
    );
  };

  const _renderMenuCheckMode = () => {
    return (
      <>
        <TouchableOpacity style={tw`px-2`} onPress={toggleIsCheckMode}>
          <ChevronLeftIcon style={tw`text-white`} size={24} />
        </TouchableOpacity>

        <View style={tw`flex-row items-center gap-2`}>
          <Text style={tw`font-primary--regular text-sm text-white`}>
            {checkedItem.length} selected
          </Text>
          <Menu>
            <MenuTrigger>
              <EllipsisVerticalIcon style={tw`text-white`} />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: tw`p-2 mt-8 w-auto rounded-lg rounded-tr-none`,
              }}>
              <MenuOption
                onSelect={() => navigateToUpdateBuikProduct()}
                style={tw`flex-row items-center gap-3 py-2`}>
                <PencilSquareIcon style={tw`text-slate-800`} size={18} />
                <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                  Edit Selected
                </Text>
              </MenuOption>
              <MenuOption
                onSelect={() => toggleShowModalDelete()}
                style={tw`flex-row items-center gap-3 py-2`}>
                <TrashIcon style={tw`text-red-600`} size={18} />
                <Text style={tw`font-primary--regular text-sm text-red-800`}>
                  Delete All
                </Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </>
    );
  };

  const _renderHeader = () => (
    <View
      style={tw`bg-slate-800 rounded-b-3xl p-4 flex-row items-center justify-between`}>
      <>{isCheckMode ? _renderMenuCheckMode() : _renderMenuNormalMode()}</>
    </View>
  );

  const _renderItem = ({item}: any) => {
    const isChecked = checkedItem.find(val => val == item);
    return (
      <TouchableOpacity
        onPress={() =>
          isCheckMode ? onChecked(item) : navigateToDetailProduct(item)
        }
        onLongPress={
          !isCheckMode
            ? () => {
                toggleIsCheckMode();
                onChecked(item);
              }
            : () => {}
        }>
        <View
          style={tw`flex-row items-start gap-4 px-4 py-3 ${
            isChecked ? 'bg-green-100' : 'bg-white'
          }`}>
          <Image
            source={{uri: 'http://picsum.photos/200'}}
            resizeMethod="resize"
            resizeMode="cover"
            style={tw`w-18 h-18 border border-slate-200 rounded-md`}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-primary--semibold text-sm text-slate-800`}>
              Nama Item
            </Text>
            <Text style={tw`font-primary--regular text-xs text-slate-500`}>
              Kategori
            </Text>
            <Text style={tw`font-primary--bold text-xl text-slate-800 mt-2`}>
              Rp 99.999.999
            </Text>
          </View>
          <View style={tw`bg-slate-200 px-1.5 py-0.5 rounded-sm`}>
            <Text style={tw`font-primary--semibold text-[10px] text-slate-800`}>
              Stok : 1
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {_renderHeader()}

      <View style={tw`px-4 mt-2`}>
        <SearchInput />
      </View>

      <View style={tw`flex-1 mt-4`}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[1, 2, 3, 4, 5, 6]}
          ItemSeparatorComponent={() => (
            <View style={tw`w-full h-[1px] bg-slate-300`} />
          )}
          ListFooterComponent={() => <View style={tw`h-24`} />}
          renderItem={_renderItem}
        />
      </View>

      <ModalConfirmationDelete
        visible={showModalDelete}
        text="Are you sure you want to delete selected items ?"
        subtext="The item will be lost forever and cannot be restored."
        onDelete={() => {}}
        onClose={toggleShowModalDelete}
      />

      <FloatingButton
        icon={<PlusIcon style={tw`text-white`} />}
        onPress={navigateToCreateProduct}
      />
      <BottomNavbar />
    </View>
  );
};

export default Product;
