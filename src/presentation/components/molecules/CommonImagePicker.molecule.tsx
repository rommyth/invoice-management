import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import React, {useState} from 'react';
import tw from '../../../application/libs/tailwind/Tailwind.instance';
import {
  CameraIcon,
  EyeIcon,
  PhotoIcon,
  TrashIcon,
  XMarkIcon,
} from 'react-native-heroicons/outline';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type CommonImpagePickerProps = {
  uri?: string;
  label?: string;
  errorText?: String;
  disabled?: boolean;
  onSelected?: (value: PickerImageResponseType) => void;
  onClear?: () => void;
};

type PickerImageResponseType = {
  name: string | undefined;
  type: string | undefined;
  uri: string | undefined;
};

const CommonImagePicker = ({
  uri,
  label,
  disabled = false,
  errorText,
  onSelected,
  onClear,
}: CommonImpagePickerProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  const handleImagePicker = async (type: 'gallery' | 'camera') => {
    setShowModal(false);

    let response;
    switch (type) {
      case 'camera':
        response = await launchCamera({mediaType: 'photo', quality: 0.6});
        break;
      case 'gallery':
        response = await launchImageLibrary({mediaType: 'photo', quality: 0.6});
        break;
    }

    if (response.didCancel) {
      return;
    } else {
      const assets = response.assets![0];
      const result: PickerImageResponseType = {
        name: assets.fileName,
        type: assets.type,
        uri: assets.uri,
      };

      onSelected?.(result);
    }
  };

  const _renderLabel = () => {
    return (
      <Text style={tw`font-primary--regular text-sm text-black`}>{label}</Text>
    );
  };

  const _renderImage = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            disabled ? setShowFullImage(true) : setShowModal(true)
          }
          style={tw`rounded-xl border border-slate-300`}>
          {uri ? (
            <Image
              source={{uri: uri}}
              resizeMethod="resize"
              resizeMode="cover"
              style={tw`w-full aspect-video `}
            />
          ) : (
            <View
              style={tw`items-center justify-center gap-2 w-full aspect-video bg-slate-100`}>
              <PhotoIcon style={tw`text-slate-400`} size={64} />
              <Text style={tw`font-primary--regular text-sm text-slate-400`}>
                Add Image
              </Text>
            </View>
          )}
        </TouchableOpacity>
        {uri && (
          <TouchableOpacity
            onPress={onClear}
            style={tw`absolute bottom-3 right-3 bg-red-500 p-2 rounded-md shadow`}>
            <TrashIcon style={tw`text-white`} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const _renderModalSourcePick = () => {
    return (
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        backdropColor={'#00000010'}>
        <View style={tw`flex-1 items-center justify-center`}>
          <View style={tw`bg-white p-4 w-4/5 rounded-lg gap-3`}>
            <View style={tw`items-end`}>
              <XMarkIcon
                style={tw`text-slate-500`}
                onPress={() => setShowModal(false)}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
                setTimeout(() => {
                  setShowFullImage(true);
                }, 50);
              }}
              style={tw`flex-row items-center justify-center gap-2 py-2 bg-slate-200 rounded-md`}>
              <EyeIcon style={tw`text-slate-800`} />
              <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                View
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleImagePicker('gallery')}
              style={tw`flex-row items-center justify-center gap-2 py-2 bg-slate-200 rounded-md`}>
              <PhotoIcon style={tw`text-slate-800`} />
              <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                Gallery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleImagePicker('camera')}
              style={tw`flex-row items-center justify-center gap-2 py-2 bg-slate-200 rounded-md`}>
              <CameraIcon style={tw`text-slate-800`} />
              <Text style={tw`font-primary--regular text-sm text-slate-800`}>
                Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const _renderShowFullImage = () => {
    return (
      <Modal
        visible={showFullImage}
        backdropColor={'#000'}
        onRequestClose={() => setShowFullImage(false)}>
        <View style={tw`flex-1 items-center justify-center`}>
          <TouchableOpacity
            style={tw`absolute top-6 right-6 z-12`}
            onPress={() => setShowFullImage(false)}>
            <XMarkIcon style={tw`text-white`} size={32} />
          </TouchableOpacity>
          <Image
            source={{uri: uri}}
            resizeMethod="resize"
            resizeMode="contain"
            style={tw`w-full h-full`}
          />
        </View>
      </Modal>
    );
  };

  const _renderTextError = () => {
    if (!errorText) {
      return null;
    }

    return (
      <Text style={tw`font-primary--regular text-xs text-red-400`}>
        {errorText}
      </Text>
    );
  };

  return (
    <View style={tw`gap-1`}>
      {_renderLabel()}
      {_renderImage()}
      {_renderModalSourcePick()}
      {_renderTextError()}
      {_renderShowFullImage()}
    </View>
  );
};

export default CommonImagePicker;
