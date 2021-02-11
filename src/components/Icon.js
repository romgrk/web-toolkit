/*
 * Icon.js
 */

import React, { useState, useEffect } from 'react';
import cx from 'clsx';

import { ReactComponent as AcAdapterSymbolic } from '../assets/icons/ac-adapter-symbolic.svg';
import { ReactComponent as AccessoriesCalculatorSymbolic } from '../assets/icons/accessories-calculator-symbolic.svg';
import { ReactComponent as AccessoriesCharacterMapSymbolic } from '../assets/icons/accessories-character-map-symbolic.svg';
import { ReactComponent as AccessoriesDictionarySymbolic } from '../assets/icons/accessories-dictionary-symbolic.svg';
import { ReactComponent as AccessoriesTextEditorSymbolic } from '../assets/icons/accessories-text-editor-symbolic.svg';
import { ReactComponent as ActionUnavailableSymbolic } from '../assets/icons/action-unavailable-symbolic.svg';
import { ReactComponent as AddressBookNewSymbolic } from '../assets/icons/address-book-new-symbolic.svg';
import { ReactComponent as AirplaneModeSymbolic } from '../assets/icons/airplane-mode-symbolic.svg';
import { ReactComponent as AlarmSymbolic } from '../assets/icons/alarm-symbolic.svg';
import { ReactComponent as AppletsScreenshooterSymbolic } from '../assets/icons/applets-screenshooter-symbolic.svg';
import { ReactComponent as ApplicationCertificateSymbolic } from '../assets/icons/application-certificate-symbolic.svg';
import { ReactComponent as ApplicationExitSymbolic } from '../assets/icons/application-exit-symbolic.svg';
import { ReactComponent as ApplicationRssXmlSymbolic } from '../assets/icons/application-rss-xml-symbolic.svg';
import { ReactComponent as ApplicationsEngineeringSymbolic } from '../assets/icons/applications-engineering-symbolic.svg';
import { ReactComponent as ApplicationsGamesSymbolic } from '../assets/icons/applications-games-symbolic.svg';
import { ReactComponent as ApplicationsGraphicsSymbolic } from '../assets/icons/applications-graphics-symbolic.svg';
import { ReactComponent as ApplicationsMultimediaSymbolic } from '../assets/icons/applications-multimedia-symbolic.svg';
import { ReactComponent as ApplicationsScienceSymbolic } from '../assets/icons/applications-science-symbolic.svg';
import { ReactComponent as ApplicationsSystemSymbolic } from '../assets/icons/applications-system-symbolic.svg';
import { ReactComponent as ApplicationsUtilitiesSymbolic } from '../assets/icons/applications-utilities-symbolic.svg';
import { ReactComponent as ApplicationXAddonSymbolic } from '../assets/icons/application-x-addon-symbolic.svg';
import { ReactComponent as ApplicationXApplianceSymbolic } from '../assets/icons/application-x-appliance-symbolic.svg';
import { ReactComponent as ApplicationXExecutableSymbolic } from '../assets/icons/application-x-executable-symbolic.svg';
import { ReactComponent as ApplicationXFirmwareSymbolic } from '../assets/icons/application-x-firmware-symbolic.svg';
import { ReactComponent as AppointmentMissedSymbolic } from '../assets/icons/appointment-missed-symbolic.svg';
import { ReactComponent as AppointmentNewSymbolic } from '../assets/icons/appointment-new-symbolic.svg';
import { ReactComponent as AppointmentSoonSymbolic } from '../assets/icons/appointment-soon-symbolic.svg';
import { ReactComponent as AudioCardSymbolic } from '../assets/icons/audio-card-symbolic.svg';
import { ReactComponent as AudioHeadphonesSymbolic } from '../assets/icons/audio-headphones-symbolic.svg';
import { ReactComponent as AudioHeadsetSymbolic } from '../assets/icons/audio-headset-symbolic.svg';
import { ReactComponent as AudioInputMicrophoneSymbolic } from '../assets/icons/audio-input-microphone-symbolic.svg';
import { ReactComponent as AudioSpeakersSymbolic } from '../assets/icons/audio-speakers-symbolic.svg';
import { ReactComponent as AudioVolumeHighSymbolic } from '../assets/icons/audio-volume-high-symbolic.svg';
import { ReactComponent as AudioVolumeLowSymbolic } from '../assets/icons/audio-volume-low-symbolic.svg';
import { ReactComponent as AudioVolumeMediumSymbolic } from '../assets/icons/audio-volume-medium-symbolic.svg';
import { ReactComponent as AudioVolumeMutedSymbolic } from '../assets/icons/audio-volume-muted-symbolic.svg';
import { ReactComponent as AudioVolumeOveramplifiedSymbolic } from '../assets/icons/audio-volume-overamplified-symbolic.svg';
import { ReactComponent as AudioXGenericSymbolic } from '../assets/icons/audio-x-generic-symbolic.svg';
import { ReactComponent as AuthFingerprintSymbolic } from '../assets/icons/auth-fingerprint-symbolic.svg';
import { ReactComponent as AuthSimLockedSymbolic } from '../assets/icons/auth-sim-locked-symbolic.svg';
import { ReactComponent as AuthSimMissingSymbolic } from '../assets/icons/auth-sim-missing-symbolic.svg';
import { ReactComponent as AuthSimSymbolic } from '../assets/icons/auth-sim-symbolic.svg';
import { ReactComponent as AuthSmartcardSymbolic } from '../assets/icons/auth-smartcard-symbolic.svg';
import { ReactComponent as AvatarDefaultSymbolic } from '../assets/icons/avatar-default-symbolic.svg';
import { ReactComponent as BatteryCautionChargingSymbolic } from '../assets/icons/battery-caution-charging-symbolic.svg';
import { ReactComponent as BatteryCautionSymbolic } from '../assets/icons/battery-caution-symbolic.svg';
import { ReactComponent as BatteryEmptyChargingSymbolic } from '../assets/icons/battery-empty-charging-symbolic.svg';
import { ReactComponent as BatteryEmptySymbolic } from '../assets/icons/battery-empty-symbolic.svg';
import { ReactComponent as BatteryFullChargedSymbolic } from '../assets/icons/battery-full-charged-symbolic.svg';
import { ReactComponent as BatteryFullChargingSymbolic } from '../assets/icons/battery-full-charging-symbolic.svg';
import { ReactComponent as BatteryFullSymbolic } from '../assets/icons/battery-full-symbolic.svg';
import { ReactComponent as BatteryGoodChargingSymbolic } from '../assets/icons/battery-good-charging-symbolic.svg';
import { ReactComponent as BatteryGoodSymbolic } from '../assets/icons/battery-good-symbolic.svg';
import { ReactComponent as BatteryLevel0ChargingSymbolic } from '../assets/icons/battery-level-0-charging-symbolic.svg';
import { ReactComponent as BatteryLevel0Symbolic } from '../assets/icons/battery-level-0-symbolic.svg';
import { ReactComponent as BatteryLevel100ChargedSymbolic } from '../assets/icons/battery-level-100-charged-symbolic.svg';
import { ReactComponent as BatteryLevel100Symbolic } from '../assets/icons/battery-level-100-symbolic.svg';
import { ReactComponent as BatteryLevel10ChargingSymbolic } from '../assets/icons/battery-level-10-charging-symbolic.svg';
import { ReactComponent as BatteryLevel10Symbolic } from '../assets/icons/battery-level-10-symbolic.svg';
import { ReactComponent as BatteryLevel20ChargingSymbolic } from '../assets/icons/battery-level-20-charging-symbolic.svg';
import { ReactComponent as BatteryLevel20Symbolic } from '../assets/icons/battery-level-20-symbolic.svg';
import { ReactComponent as BatteryLevel30ChargingSymbolic } from '../assets/icons/battery-level-30-charging-symbolic.svg';
import { ReactComponent as BatteryLevel30Symbolic } from '../assets/icons/battery-level-30-symbolic.svg';
import { ReactComponent as BatteryLevel40ChargingSymbolic } from '../assets/icons/battery-level-40-charging-symbolic.svg';
import { ReactComponent as BatteryLevel40Symbolic } from '../assets/icons/battery-level-40-symbolic.svg';
import { ReactComponent as BatteryLevel50ChargingSymbolic } from '../assets/icons/battery-level-50-charging-symbolic.svg';
import { ReactComponent as BatteryLevel50Symbolic } from '../assets/icons/battery-level-50-symbolic.svg';
import { ReactComponent as BatteryLevel60ChargingSymbolic } from '../assets/icons/battery-level-60-charging-symbolic.svg';
import { ReactComponent as BatteryLevel60Symbolic } from '../assets/icons/battery-level-60-symbolic.svg';
import { ReactComponent as BatteryLevel70ChargingSymbolic } from '../assets/icons/battery-level-70-charging-symbolic.svg';
import { ReactComponent as BatteryLevel70Symbolic } from '../assets/icons/battery-level-70-symbolic.svg';
import { ReactComponent as BatteryLevel80ChargingSymbolic } from '../assets/icons/battery-level-80-charging-symbolic.svg';
import { ReactComponent as BatteryLevel80Symbolic } from '../assets/icons/battery-level-80-symbolic.svg';
import { ReactComponent as BatteryLevel90ChargingSymbolic } from '../assets/icons/battery-level-90-charging-symbolic.svg';
import { ReactComponent as BatteryLevel90Symbolic } from '../assets/icons/battery-level-90-symbolic.svg';
import { ReactComponent as BatteryLowChargingSymbolic } from '../assets/icons/battery-low-charging-symbolic.svg';
import { ReactComponent as BatteryLowSymbolic } from '../assets/icons/battery-low-symbolic.svg';
import { ReactComponent as BatteryMissingSymbolic } from '../assets/icons/battery-missing-symbolic.svg';
import { ReactComponent as BatterySymbolic } from '../assets/icons/battery-symbolic.svg';
import { ReactComponent as BluetoothActiveSymbolic } from '../assets/icons/bluetooth-active-symbolic.svg';
import { ReactComponent as BluetoothDisabledSymbolic } from '../assets/icons/bluetooth-disabled-symbolic.svg';
import { ReactComponent as BluetoothDisconnectedSymbolic } from '../assets/icons/bluetooth-disconnected-symbolic.svg';
import { ReactComponent as BluetoothHardwareDisabledSymbolic } from '../assets/icons/bluetooth-hardware-disabled-symbolic.svg';
import { ReactComponent as BluetoothSymbolic } from '../assets/icons/bluetooth-symbolic.svg';
import { ReactComponent as BookmarkNewSymbolic } from '../assets/icons/bookmark-new-symbolic.svg';
import { ReactComponent as CallIncomingSymbolic } from '../assets/icons/call-incoming-symbolic.svg';
import { ReactComponent as CallMissedSymbolic } from '../assets/icons/call-missed-symbolic.svg';
import { ReactComponent as CallOutgoingSymbolic } from '../assets/icons/call-outgoing-symbolic.svg';
import { ReactComponent as CallStartSymbolic } from '../assets/icons/call-start-symbolic.svg';
import { ReactComponent as CallStopSymbolic } from '../assets/icons/call-stop-symbolic.svg';
import { ReactComponent as CameraDisabledSymbolic } from '../assets/icons/camera-disabled-symbolic.svg';
import { ReactComponent as CameraHardwareDisabledSymbolic } from '../assets/icons/camera-hardware-disabled-symbolic.svg';
import { ReactComponent as CameraPhotoSymbolic } from '../assets/icons/camera-photo-symbolic.svg';
import { ReactComponent as CameraSwitchSymbolic } from '../assets/icons/camera-switch-symbolic.svg';
import { ReactComponent as CameraVideoSymbolic } from '../assets/icons/camera-video-symbolic.svg';
import { ReactComponent as CameraWebSymbolic } from '../assets/icons/camera-web-symbolic.svg';
import { ReactComponent as CapsLockSymbolic } from '../assets/icons/caps-lock-symbolic.svg';
import { ReactComponent as ChangesAllowSymbolic } from '../assets/icons/changes-allow-symbolic.svg';
import { ReactComponent as ChangesPreventSymbolic } from '../assets/icons/changes-prevent-symbolic.svg';
import { ReactComponent as ChannelInsecureSymbolic } from '../assets/icons/channel-insecure-symbolic.svg';
import { ReactComponent as ChannelSecureSymbolic } from '../assets/icons/channel-secure-symbolic.svg';
import { ReactComponent as ChatMessageNewSymbolic } from '../assets/icons/chat-message-new-symbolic.svg';
import { ReactComponent as CheckboxCheckedSymbolic } from '../assets/icons/checkbox-checked-symbolic.svg';
import { ReactComponent as CheckboxMixedSymbolic } from '../assets/icons/checkbox-mixed-symbolic.svg';
import { ReactComponent as CheckboxSymbolic } from '../assets/icons/checkbox-symbolic.svg';
import { ReactComponent as ColorimeterColorhugSymbolic } from '../assets/icons/colorimeter-colorhug-symbolic.svg';
import { ReactComponent as ColorSelectSymbolic } from '../assets/icons/color-select-symbolic.svg';
import { ReactComponent as ComputerAppleIpadSymbolic } from '../assets/icons/computer-apple-ipad-symbolic.svg';
import { ReactComponent as ComputerFailSymbolic } from '../assets/icons/computer-fail-symbolic.svg';
import { ReactComponent as ComputerSymbolic } from '../assets/icons/computer-symbolic.svg';
import { ReactComponent as ContactNewSymbolic } from '../assets/icons/contact-new-symbolic.svg';
import { ReactComponent as ContentLoadingSymbolic } from '../assets/icons/content-loading-symbolic.svg';
import { ReactComponent as DaytimeSunriseSymbolic } from '../assets/icons/daytime-sunrise-symbolic.svg';
import { ReactComponent as DaytimeSunsetSymbolic } from '../assets/icons/daytime-sunset-symbolic.svg';
import { ReactComponent as DialogErrorSymbolic } from '../assets/icons/dialog-error-symbolic.svg';
import { ReactComponent as DialogInformationSymbolic } from '../assets/icons/dialog-information-symbolic.svg';
import { ReactComponent as DialogPasswordSymbolic } from '../assets/icons/dialog-password-symbolic.svg';
import { ReactComponent as DialogQuestionSymbolic } from '../assets/icons/dialog-question-symbolic.svg';
import { ReactComponent as DialogWarningSymbolic } from '../assets/icons/dialog-warning-symbolic.svg';
import { ReactComponent as DisplayBrightnessSymbolic } from '../assets/icons/display-brightness-symbolic.svg';
import { ReactComponent as DisplayProjectorSymbolic } from '../assets/icons/display-projector-symbolic.svg';
import { ReactComponent as DocumentEditSymbolic } from '../assets/icons/document-edit-symbolic.svg';
import { ReactComponent as DocumentNewSymbolic } from '../assets/icons/document-new-symbolic.svg';
import { ReactComponent as DocumentOpenRecentSymbolic } from '../assets/icons/document-open-recent-symbolic.svg';
import { ReactComponent as DocumentOpenSymbolic } from '../assets/icons/document-open-symbolic.svg';
import { ReactComponent as DocumentPageSetupSymbolic } from '../assets/icons/document-page-setup-symbolic.svg';
import { ReactComponent as DocumentPrintPreviewSymbolic } from '../assets/icons/document-print-preview-symbolic.svg';
import { ReactComponent as DocumentPrintSymbolic } from '../assets/icons/document-print-symbolic.svg';
import { ReactComponent as DocumentPropertiesSymbolic } from '../assets/icons/document-properties-symbolic.svg';
import { ReactComponent as DocumentRevertSymbolicRtl } from '../assets/icons/document-revert-symbolic-rtl.svg';
import { ReactComponent as DocumentRevertSymbolic } from '../assets/icons/document-revert-symbolic.svg';
import { ReactComponent as DocumentSaveAsSymbolic } from '../assets/icons/document-save-as-symbolic.svg';
import { ReactComponent as DocumentSaveSymbolic } from '../assets/icons/document-save-symbolic.svg';
import { ReactComponent as DocumentSendSymbolic } from '../assets/icons/document-send-symbolic.svg';
import { ReactComponent as DriveHarddiskIeee1394Symbolic } from '../assets/icons/drive-harddisk-ieee1394-symbolic.svg';
import { ReactComponent as DriveHarddiskSolidstateSymbolic } from '../assets/icons/drive-harddisk-solidstate-symbolic.svg';
import { ReactComponent as DriveHarddiskSymbolic } from '../assets/icons/drive-harddisk-symbolic.svg';
import { ReactComponent as DriveHarddiskSystemSymbolic } from '../assets/icons/drive-harddisk-system-symbolic.svg';
import { ReactComponent as DriveHarddiskUsbSymbolic } from '../assets/icons/drive-harddisk-usb-symbolic.svg';
import { ReactComponent as DriveMultidiskSymbolic } from '../assets/icons/drive-multidisk-symbolic.svg';
import { ReactComponent as DriveOpticalSymbolic } from '../assets/icons/drive-optical-symbolic.svg';
import { ReactComponent as DriveRemovableMediaSymbolic } from '../assets/icons/drive-removable-media-symbolic.svg';
import { ReactComponent as EditClearAllSymbolic } from '../assets/icons/edit-clear-all-symbolic.svg';
import { ReactComponent as EditClearSymbolicRtl } from '../assets/icons/edit-clear-symbolic-rtl.svg';
import { ReactComponent as EditClearSymbolic } from '../assets/icons/edit-clear-symbolic.svg';
import { ReactComponent as EditCopySymbolic } from '../assets/icons/edit-copy-symbolic.svg';
import { ReactComponent as EditCutSymbolic } from '../assets/icons/edit-cut-symbolic.svg';
import { ReactComponent as EditDeleteSymbolic } from '../assets/icons/edit-delete-symbolic.svg';
import { ReactComponent as EditFindReplaceSymbolic } from '../assets/icons/edit-find-replace-symbolic.svg';
import { ReactComponent as EditFindSymbolic } from '../assets/icons/edit-find-symbolic.svg';
import { ReactComponent as EditPasteSymbolic } from '../assets/icons/edit-paste-symbolic.svg';
import { ReactComponent as EditRedoSymbolic } from '../assets/icons/edit-redo-symbolic.svg';
import { ReactComponent as EditSelectAllSymbolic } from '../assets/icons/edit-select-all-symbolic.svg';
import { ReactComponent as EditSelectSymbolic } from '../assets/icons/edit-select-symbolic.svg';
import { ReactComponent as EditUndoSymbolic } from '../assets/icons/edit-undo-symbolic.svg';
import { ReactComponent as EmblemDefaultSymbolic } from '../assets/icons/emblem-default-symbolic.svg';
import { ReactComponent as EmblemDocumentsSymbolic } from '../assets/icons/emblem-documents-symbolic.svg';
import { ReactComponent as EmblemFavoriteSymbolic } from '../assets/icons/emblem-favorite-symbolic.svg';
import { ReactComponent as EmblemImportantSymbolic } from '../assets/icons/emblem-important-symbolic.svg';
import { ReactComponent as EmblemMusicSymbolic } from '../assets/icons/emblem-music-symbolic.svg';
import { ReactComponent as EmblemOkSymbolic } from '../assets/icons/emblem-ok-symbolic.svg';
import { ReactComponent as EmblemPhotosSymbolic } from '../assets/icons/emblem-photos-symbolic.svg';
import { ReactComponent as EmblemSharedSymbolic } from '../assets/icons/emblem-shared-symbolic.svg';
import { ReactComponent as EmblemSynchronizingSymbolic } from '../assets/icons/emblem-synchronizing-symbolic.svg';
import { ReactComponent as EmblemSystemSymbolic } from '../assets/icons/emblem-system-symbolic.svg';
import { ReactComponent as EmblemVideosSymbolic } from '../assets/icons/emblem-videos-symbolic.svg';
import { ReactComponent as EmojiActivitiesSymbolic } from '../assets/icons/emoji-activities-symbolic.svg';
import { ReactComponent as EmojiBodySymbolic } from '../assets/icons/emoji-body-symbolic.svg';
import { ReactComponent as EmojiFlagsSymbolic } from '../assets/icons/emoji-flags-symbolic.svg';
import { ReactComponent as EmojiFoodSymbolic } from '../assets/icons/emoji-food-symbolic.svg';
import { ReactComponent as EmojiNatureSymbolic } from '../assets/icons/emoji-nature-symbolic.svg';
import { ReactComponent as EmojiObjectsSymbolic } from '../assets/icons/emoji-objects-symbolic.svg';
import { ReactComponent as EmojiPeopleSymbolic } from '../assets/icons/emoji-people-symbolic.svg';
import { ReactComponent as EmojiRecentSymbolic } from '../assets/icons/emoji-recent-symbolic.svg';
import { ReactComponent as EmojiSymbolsSymbolic } from '../assets/icons/emoji-symbols-symbolic.svg';
import { ReactComponent as EmojiTravelSymbolic } from '../assets/icons/emoji-travel-symbolic.svg';
import { ReactComponent as EmoteLoveSymbolic } from '../assets/icons/emote-love-symbolic.svg';
import { ReactComponent as ErrorCorrectSymbolic } from '../assets/icons/error-correct-symbolic.svg';
import { ReactComponent as EyeNotLookingSymbolic } from '../assets/icons/eye-not-looking-symbolic.svg';
import { ReactComponent as EyeOpenNegativeFilledSymbolic } from '../assets/icons/eye-open-negative-filled-symbolic.svg';
import { ReactComponent as FaceAngelSymbolic } from '../assets/icons/face-angel-symbolic.svg';
import { ReactComponent as FaceAngrySymbolic } from '../assets/icons/face-angry-symbolic.svg';
import { ReactComponent as FaceConfusedSymbolic } from '../assets/icons/face-confused-symbolic.svg';
import { ReactComponent as FaceCoolSymbolic } from '../assets/icons/face-cool-symbolic.svg';
import { ReactComponent as FaceCryingSymbolic } from '../assets/icons/face-crying-symbolic.svg';
import { ReactComponent as FaceDevilishSymbolic } from '../assets/icons/face-devilish-symbolic.svg';
import { ReactComponent as FaceEmbarrassedSymbolic } from '../assets/icons/face-embarrassed-symbolic.svg';
import { ReactComponent as FaceGlassesSymbolic } from '../assets/icons/face-glasses-symbolic.svg';
import { ReactComponent as FaceKissSymbolic } from '../assets/icons/face-kiss-symbolic.svg';
import { ReactComponent as FaceLaughSymbolic } from '../assets/icons/face-laugh-symbolic.svg';
import { ReactComponent as FaceMonkeySymbolic } from '../assets/icons/face-monkey-symbolic.svg';
import { ReactComponent as FacePlainSymbolic } from '../assets/icons/face-plain-symbolic.svg';
import { ReactComponent as FaceRaspberrySymbolic } from '../assets/icons/face-raspberry-symbolic.svg';
import { ReactComponent as FaceSadSymbolic } from '../assets/icons/face-sad-symbolic.svg';
import { ReactComponent as FaceShutmouthSymbolic } from '../assets/icons/face-shutmouth-symbolic.svg';
import { ReactComponent as FaceSickSymbolic } from '../assets/icons/face-sick-symbolic.svg';
import { ReactComponent as FaceSmileBigSymbolic } from '../assets/icons/face-smile-big-symbolic.svg';
import { ReactComponent as FaceSmileSymbolic } from '../assets/icons/face-smile-symbolic.svg';
import { ReactComponent as FaceSmirkSymbolic } from '../assets/icons/face-smirk-symbolic.svg';
import { ReactComponent as FaceSurpriseSymbolic } from '../assets/icons/face-surprise-symbolic.svg';
import { ReactComponent as FaceTiredSymbolic } from '../assets/icons/face-tired-symbolic.svg';
import { ReactComponent as FaceUncertainSymbolic } from '../assets/icons/face-uncertain-symbolic.svg';
import { ReactComponent as FaceWinkSymbolic } from '../assets/icons/face-wink-symbolic.svg';
import { ReactComponent as FaceWorriedSymbolic } from '../assets/icons/face-worried-symbolic.svg';
import { ReactComponent as FaceYawnSymbolic } from '../assets/icons/face-yawn-symbolic.svg';
import { ReactComponent as FindLocationSymbolic } from '../assets/icons/find-location-symbolic.svg';
import { ReactComponent as FocusLegacySystraySymbolic } from '../assets/icons/focus-legacy-systray-symbolic.svg';
import { ReactComponent as FocusTopBarSymbolic } from '../assets/icons/focus-top-bar-symbolic.svg';
import { ReactComponent as FocusWindowsSymbolic } from '../assets/icons/focus-windows-symbolic.svg';
import { ReactComponent as FolderDocumentsSymbolic } from '../assets/icons/folder-documents-symbolic.svg';
import { ReactComponent as FolderDownloadSymbolic } from '../assets/icons/folder-download-symbolic.svg';
import { ReactComponent as FolderDragAcceptSymbolic } from '../assets/icons/folder-drag-accept-symbolic.svg';
import { ReactComponent as FolderMusicSymbolic } from '../assets/icons/folder-music-symbolic.svg';
import { ReactComponent as FolderNewSymbolic } from '../assets/icons/folder-new-symbolic.svg';
import { ReactComponent as FolderOpenSymbolic } from '../assets/icons/folder-open-symbolic.svg';
import { ReactComponent as FolderPicturesSymbolic } from '../assets/icons/folder-pictures-symbolic.svg';
import { ReactComponent as FolderPublicshareSymbolic } from '../assets/icons/folder-publicshare-symbolic.svg';
import { ReactComponent as FolderRemoteSymbolic } from '../assets/icons/folder-remote-symbolic.svg';
import { ReactComponent as FolderSavedSearchSymbolic } from '../assets/icons/folder-saved-search-symbolic.svg';
import { ReactComponent as FolderSymbolic } from '../assets/icons/folder-symbolic.svg';
import { ReactComponent as FolderTemplatesSymbolic } from '../assets/icons/folder-templates-symbolic.svg';
import { ReactComponent as FolderVideosSymbolic } from '../assets/icons/folder-videos-symbolic.svg';
import { ReactComponent as FolderVisitingSymbolic } from '../assets/icons/folder-visiting-symbolic.svg';
import { ReactComponent as FontSelectSymbolic } from '../assets/icons/font-select-symbolic.svg';
import { ReactComponent as FontXGenericSymbolic } from '../assets/icons/font-x-generic-symbolic.svg';
import { ReactComponent as FormatIndentLessSymbolic } from '../assets/icons/format-indent-less-symbolic.svg';
import { ReactComponent as FormatIndentMoreSymbolic } from '../assets/icons/format-indent-more-symbolic.svg';
import { ReactComponent as FormatJustifyCenterSymbolic } from '../assets/icons/format-justify-center-symbolic.svg';
import { ReactComponent as FormatJustifyFillSymbolic } from '../assets/icons/format-justify-fill-symbolic.svg';
import { ReactComponent as FormatJustifyLeftSymbolic } from '../assets/icons/format-justify-left-symbolic.svg';
import { ReactComponent as FormatJustifyRightSymbolic } from '../assets/icons/format-justify-right-symbolic.svg';
import { ReactComponent as FormatTextBoldSymbolic } from '../assets/icons/format-text-bold-symbolic.svg';
import { ReactComponent as FormatTextDirectionSymbolicRtl } from '../assets/icons/format-text-direction-symbolic-rtl.svg';
import { ReactComponent as FormatTextDirectionSymbolic } from '../assets/icons/format-text-direction-symbolic.svg';
import { ReactComponent as FormatTextItalicSymbolic } from '../assets/icons/format-text-italic-symbolic.svg';
import { ReactComponent as FormatTextStrikethroughSymbolic } from '../assets/icons/format-text-strikethrough-symbolic.svg';
import { ReactComponent as FormatTextUnderlineSymbolic } from '../assets/icons/format-text-underline-symbolic.svg';
import { ReactComponent as GnomePowerManagerSymbolic } from '../assets/icons/gnome-power-manager-symbolic.svg';
import { ReactComponent as GoaPanelSymbolic } from '../assets/icons/goa-panel-symbolic.svg';
import { ReactComponent as GoBottomSymbolic } from '../assets/icons/go-bottom-symbolic.svg';
import { ReactComponent as GoDownSymbolic } from '../assets/icons/go-down-symbolic.svg';
import { ReactComponent as GoFirstSymbolic } from '../assets/icons/go-first-symbolic.svg';
import { ReactComponent as GoHomeSymbolic } from '../assets/icons/go-home-symbolic.svg';
import { ReactComponent as GoJumpSymbolicRtl } from '../assets/icons/go-jump-symbolic-rtl.svg';
import { ReactComponent as GoJumpSymbolic } from '../assets/icons/go-jump-symbolic.svg';
import { ReactComponent as GoLastSymbolic } from '../assets/icons/go-last-symbolic.svg';
import { ReactComponent as GoNextSymbolic } from '../assets/icons/go-next-symbolic.svg';
import { ReactComponent as GoPreviousSymbolic } from '../assets/icons/go-previous-symbolic.svg';
import { ReactComponent as GoTopSymbolic } from '../assets/icons/go-top-symbolic.svg';
import { ReactComponent as GoUpSymbolic } from '../assets/icons/go-up-symbolic.svg';
import { ReactComponent as HelpAboutSymbolic } from '../assets/icons/help-about-symbolic.svg';
import { ReactComponent as HelpBrowserSymbolic } from '../assets/icons/help-browser-symbolic.svg';
import { ReactComponent as HelpContentsSymbolic } from '../assets/icons/help-contents-symbolic.svg';
import { ReactComponent as HelpFaqSymbolic } from '../assets/icons/help-faq-symbolic.svg';
import { ReactComponent as ImageLoadingSymbolic } from '../assets/icons/image-loading-symbolic.svg';
import { ReactComponent as ImageXGenericSymbolic } from '../assets/icons/image-x-generic-symbolic.svg';
import { ReactComponent as InodeDirectorySymbolic } from '../assets/icons/inode-directory-symbolic.svg';
import { ReactComponent as InputDialpadSymbolic } from '../assets/icons/input-dialpad-symbolic.svg';
import { ReactComponent as InputGamingSymbolic } from '../assets/icons/input-gaming-symbolic.svg';
import { ReactComponent as InputKeyboardSymbolic } from '../assets/icons/input-keyboard-symbolic.svg';
import { ReactComponent as InputMouseSymbolic } from '../assets/icons/input-mouse-symbolic.svg';
import { ReactComponent as InputTabletSymbolic } from '../assets/icons/input-tablet-symbolic.svg';
import { ReactComponent as InputTouchpadSymbolic } from '../assets/icons/input-touchpad-symbolic.svg';
import { ReactComponent as InsertImageSymbolic } from '../assets/icons/insert-image-symbolic.svg';
import { ReactComponent as InsertLinkSymbolic } from '../assets/icons/insert-link-symbolic.svg';
import { ReactComponent as InsertObjectSymbolic } from '../assets/icons/insert-object-symbolic.svg';
import { ReactComponent as InsertTextSymbolic } from '../assets/icons/insert-text-symbolic.svg';
import { ReactComponent as KeyboardBrightnessSymbolic } from '../assets/icons/keyboard-brightness-symbolic.svg';
import { ReactComponent as ListAddSymbolic } from '../assets/icons/list-add-symbolic.svg';
import { ReactComponent as ListDragHandleSymbolic } from '../assets/icons/list-drag-handle-symbolic.svg';
import { ReactComponent as ListRemoveAllSymbolic } from '../assets/icons/list-remove-all-symbolic.svg';
import { ReactComponent as ListRemoveSymbolic } from '../assets/icons/list-remove-symbolic.svg';
import { ReactComponent as LocationServicesActiveSymbolic } from '../assets/icons/location-services-active-symbolic.svg';
import { ReactComponent as LocationServicesDisabledSymbolic } from '../assets/icons/location-services-disabled-symbolic.svg';
import { ReactComponent as MailAttachmentSymbolic } from '../assets/icons/mail-attachment-symbolic.svg';
import { ReactComponent as MailForwardSymbolic } from '../assets/icons/mail-forward-symbolic.svg';
import { ReactComponent as MailMarkImportantSymbolic } from '../assets/icons/mail-mark-important-symbolic.svg';
import { ReactComponent as MailMarkJunkSymbolic } from '../assets/icons/mail-mark-junk-symbolic.svg';
import { ReactComponent as MailMarkNotjunkSymbolic } from '../assets/icons/mail-mark-notjunk-symbolic.svg';
import { ReactComponent as MailMessageNewSymbolic } from '../assets/icons/mail-message-new-symbolic.svg';
import { ReactComponent as MailReadSymbolic } from '../assets/icons/mail-read-symbolic.svg';
import { ReactComponent as MailRepliedSymbolic } from '../assets/icons/mail-replied-symbolic.svg';
import { ReactComponent as MailReplyAllSymbolic } from '../assets/icons/mail-reply-all-symbolic.svg';
import { ReactComponent as MailReplySenderSymbolic } from '../assets/icons/mail-reply-sender-symbolic.svg';
import { ReactComponent as MailSendReceiveSymbolic } from '../assets/icons/mail-send-receive-symbolic.svg';
import { ReactComponent as MailSendSymbolic } from '../assets/icons/mail-send-symbolic.svg';
import { ReactComponent as MailUnreadSymbolic } from '../assets/icons/mail-unread-symbolic.svg';
import { ReactComponent as MarkLocationSymbolic } from '../assets/icons/mark-location-symbolic.svg';
import { ReactComponent as MediaEjectSymbolic } from '../assets/icons/media-eject-symbolic.svg';
import { ReactComponent as MediaFlashSymbolic } from '../assets/icons/media-flash-symbolic.svg';
import { ReactComponent as MediaFloppySymbolic } from '../assets/icons/media-floppy-symbolic.svg';
import { ReactComponent as MediaOpticalBdSymbolic } from '../assets/icons/media-optical-bd-symbolic.svg';
import { ReactComponent as MediaOpticalCdAudioSymbolic } from '../assets/icons/media-optical-cd-audio-symbolic.svg';
import { ReactComponent as MediaOpticalDvdSymbolic } from '../assets/icons/media-optical-dvd-symbolic.svg';
import { ReactComponent as MediaOpticalSymbolic } from '../assets/icons/media-optical-symbolic.svg';
import { ReactComponent as MediaPlaybackPauseSymbolic } from '../assets/icons/media-playback-pause-symbolic.svg';
import { ReactComponent as MediaPlaybackStartSymbolicRtl } from '../assets/icons/media-playback-start-symbolic-rtl.svg';
import { ReactComponent as MediaPlaybackStartSymbolic } from '../assets/icons/media-playback-start-symbolic.svg';
import { ReactComponent as MediaPlaybackStopSymbolic } from '../assets/icons/media-playback-stop-symbolic.svg';
import { ReactComponent as MediaPlaylistConsecutiveSymbolic } from '../assets/icons/media-playlist-consecutive-symbolic.svg';
import { ReactComponent as MediaPlaylistRepeatSongSymbolic } from '../assets/icons/media-playlist-repeat-song-symbolic.svg';
import { ReactComponent as MediaPlaylistRepeatSymbolic } from '../assets/icons/media-playlist-repeat-symbolic.svg';
import { ReactComponent as MediaPlaylistShuffleSymbolic } from '../assets/icons/media-playlist-shuffle-symbolic.svg';
import { ReactComponent as MediaRecordSymbolic } from '../assets/icons/media-record-symbolic.svg';
import { ReactComponent as MediaRemovableSymbolic } from '../assets/icons/media-removable-symbolic.svg';
import { ReactComponent as MediaSeekBackwardSymbolic } from '../assets/icons/media-seek-backward-symbolic.svg';
import { ReactComponent as MediaSeekForwardSymbolic } from '../assets/icons/media-seek-forward-symbolic.svg';
import { ReactComponent as MediaSkipBackwardSymbolic } from '../assets/icons/media-skip-backward-symbolic.svg';
import { ReactComponent as MediaSkipForwardSymbolic } from '../assets/icons/media-skip-forward-symbolic.svg';
import { ReactComponent as MediaTapeSymbolic } from '../assets/icons/media-tape-symbolic.svg';
import { ReactComponent as MediaViewSubtitlesSymbolic } from '../assets/icons/media-view-subtitles-symbolic.svg';
import { ReactComponent as MediaZipSymbolic } from '../assets/icons/media-zip-symbolic.svg';
import { ReactComponent as MicrophoneDisabledSymbolic } from '../assets/icons/microphone-disabled-symbolic.svg';
import { ReactComponent as MicrophoneHardwareDisabledSymbolic } from '../assets/icons/microphone-hardware-disabled-symbolic.svg';
import { ReactComponent as MicrophoneSensitivityHighSymbolic } from '../assets/icons/microphone-sensitivity-high-symbolic.svg';
import { ReactComponent as MicrophoneSensitivityLowSymbolic } from '../assets/icons/microphone-sensitivity-low-symbolic.svg';
import { ReactComponent as MicrophoneSensitivityMediumSymbolic } from '../assets/icons/microphone-sensitivity-medium-symbolic.svg';
import { ReactComponent as MicrophoneSensitivityMutedSymbolic } from '../assets/icons/microphone-sensitivity-muted-symbolic.svg';
import { ReactComponent as ModemSymbolic } from '../assets/icons/modem-symbolic.svg';
import { ReactComponent as MultimediaPlayerAppleIpodTouchSymbolic } from '../assets/icons/multimedia-player-apple-ipod-touch-symbolic.svg';
import { ReactComponent as MultimediaPlayerSymbolic } from '../assets/icons/multimedia-player-symbolic.svg';
import { ReactComponent as MultimediaVolumeControlSymbolic } from '../assets/icons/multimedia-volume-control-symbolic.svg';
import { ReactComponent as NetworkCellular2gSymbolic } from '../assets/icons/network-cellular-2g-symbolic.svg';
import { ReactComponent as NetworkCellular3gSymbolic } from '../assets/icons/network-cellular-3g-symbolic.svg';
import { ReactComponent as NetworkCellular4gSymbolic } from '../assets/icons/network-cellular-4g-symbolic.svg';
import { ReactComponent as NetworkCellularAcquiringSymbolic } from '../assets/icons/network-cellular-acquiring-symbolic.svg';
import { ReactComponent as NetworkCellularConnectedSymbolic } from '../assets/icons/network-cellular-connected-symbolic.svg';
import { ReactComponent as NetworkCellularDisabledSymbolic } from '../assets/icons/network-cellular-disabled-symbolic.svg';
import { ReactComponent as NetworkCellularEdgeSymbolic } from '../assets/icons/network-cellular-edge-symbolic.svg';
import { ReactComponent as NetworkCellularGprsSymbolic } from '../assets/icons/network-cellular-gprs-symbolic.svg';
import { ReactComponent as NetworkCellularHardwareDisabledSymbolic } from '../assets/icons/network-cellular-hardware-disabled-symbolic.svg';
import { ReactComponent as NetworkCellularHspaSymbolic } from '../assets/icons/network-cellular-hspa-symbolic.svg';
import { ReactComponent as NetworkCellularNoRouteSymbolic } from '../assets/icons/network-cellular-no-route-symbolic.svg';
import { ReactComponent as NetworkCellularOfflineSymbolic } from '../assets/icons/network-cellular-offline-symbolic.svg';
import { ReactComponent as NetworkCellularSignalExcellentSymbolic } from '../assets/icons/network-cellular-signal-excellent-symbolic.svg';
import { ReactComponent as NetworkCellularSignalGoodSymbolic } from '../assets/icons/network-cellular-signal-good-symbolic.svg';
import { ReactComponent as NetworkCellularSignalNoneSymbolic } from '../assets/icons/network-cellular-signal-none-symbolic.svg';
import { ReactComponent as NetworkCellularSignalOkSymbolic } from '../assets/icons/network-cellular-signal-ok-symbolic.svg';
import { ReactComponent as NetworkCellularSignalWeakSymbolic } from '../assets/icons/network-cellular-signal-weak-symbolic.svg';
import { ReactComponent as NetworkCellularSymbolic } from '../assets/icons/network-cellular-symbolic.svg';
import { ReactComponent as NetworkErrorSymbolic } from '../assets/icons/network-error-symbolic.svg';
import { ReactComponent as NetworkIdleSymbolic } from '../assets/icons/network-idle-symbolic.svg';
import { ReactComponent as NetworkNoRouteSymbolic } from '../assets/icons/network-no-route-symbolic.svg';
import { ReactComponent as NetworkOfflineSymbolic } from '../assets/icons/network-offline-symbolic.svg';
import { ReactComponent as NetworkReceiveSymbolic } from '../assets/icons/network-receive-symbolic.svg';
import { ReactComponent as NetworkServerSymbolic } from '../assets/icons/network-server-symbolic.svg';
import { ReactComponent as NetworkTransmitReceiveSymbolic } from '../assets/icons/network-transmit-receive-symbolic.svg';
import { ReactComponent as NetworkTransmitSymbolic } from '../assets/icons/network-transmit-symbolic.svg';
import { ReactComponent as NetworkVpnAcquiringSymbolic } from '../assets/icons/network-vpn-acquiring-symbolic.svg';
import { ReactComponent as NetworkVpnNoRouteSymbolic } from '../assets/icons/network-vpn-no-route-symbolic.svg';
import { ReactComponent as NetworkVpnSymbolic } from '../assets/icons/network-vpn-symbolic.svg';
import { ReactComponent as NetworkWiredAcquiringSymbolic } from '../assets/icons/network-wired-acquiring-symbolic.svg';
import { ReactComponent as NetworkWiredDisconnectedSymbolic } from '../assets/icons/network-wired-disconnected-symbolic.svg';
import { ReactComponent as NetworkWiredNoRouteSymbolic } from '../assets/icons/network-wired-no-route-symbolic.svg';
import { ReactComponent as NetworkWiredOfflineSymbolic } from '../assets/icons/network-wired-offline-symbolic.svg';
import { ReactComponent as NetworkWiredSymbolic } from '../assets/icons/network-wired-symbolic.svg';
import { ReactComponent as NetworkWirelessAcquiringSymbolic } from '../assets/icons/network-wireless-acquiring-symbolic.svg';
import { ReactComponent as NetworkWirelessConnectedSymbolic } from '../assets/icons/network-wireless-connected-symbolic.svg';
import { ReactComponent as NetworkWirelessDisabledSymbolic } from '../assets/icons/network-wireless-disabled-symbolic.svg';
import { ReactComponent as NetworkWirelessEncryptedSymbolic } from '../assets/icons/network-wireless-encrypted-symbolic.svg';
import { ReactComponent as NetworkWirelessHardwareDisabledSymbolic } from '../assets/icons/network-wireless-hardware-disabled-symbolic.svg';
import { ReactComponent as NetworkWirelessHotspotSymbolic } from '../assets/icons/network-wireless-hotspot-symbolic.svg';
import { ReactComponent as NetworkWirelessNoRouteSymbolic } from '../assets/icons/network-wireless-no-route-symbolic.svg';
import { ReactComponent as NetworkWirelessOfflineSymbolic } from '../assets/icons/network-wireless-offline-symbolic.svg';
import { ReactComponent as NetworkWirelessSignalExcellentSymbolic } from '../assets/icons/network-wireless-signal-excellent-symbolic.svg';
import { ReactComponent as NetworkWirelessSignalGoodSymbolic } from '../assets/icons/network-wireless-signal-good-symbolic.svg';
import { ReactComponent as NetworkWirelessSignalNoneSymbolic } from '../assets/icons/network-wireless-signal-none-symbolic.svg';
import { ReactComponent as NetworkWirelessSignalOkSymbolic } from '../assets/icons/network-wireless-signal-ok-symbolic.svg';
import { ReactComponent as NetworkWirelessSignalWeakSymbolic } from '../assets/icons/network-wireless-signal-weak-symbolic.svg';
import { ReactComponent as NetworkWirelessSymbolic } from '../assets/icons/network-wireless-symbolic.svg';
import { ReactComponent as NetworkWorkgroupSymbolic } from '../assets/icons/network-workgroup-symbolic.svg';
import { ReactComponent as NightLightSymbolic } from '../assets/icons/night-light-symbolic.svg';
import { ReactComponent as NonStarredSymbolic } from '../assets/icons/non-starred-symbolic.svg';
import { ReactComponent as NotificationsDisabledSymbolic } from '../assets/icons/notifications-disabled-symbolic.svg';
import { ReactComponent as ObjectFlipHorizontalSymbolic } from '../assets/icons/object-flip-horizontal-symbolic.svg';
import { ReactComponent as ObjectFlipVerticalSymbolic } from '../assets/icons/object-flip-vertical-symbolic.svg';
import { ReactComponent as ObjectRotateLeftSymbolic } from '../assets/icons/object-rotate-left-symbolic.svg';
import { ReactComponent as ObjectRotateRightSymbolic } from '../assets/icons/object-rotate-right-symbolic.svg';
import { ReactComponent as ObjectSelectSymbolic } from '../assets/icons/object-select-symbolic.svg';
import { ReactComponent as OpenMenuSymbolic } from '../assets/icons/open-menu-symbolic.svg';
import { ReactComponent as OrientationLandscapeInverseSymbolic } from '../assets/icons/orientation-landscape-inverse-symbolic.svg';
import { ReactComponent as OrientationLandscapeSymbolic } from '../assets/icons/orientation-landscape-symbolic.svg';
import { ReactComponent as OrientationPortraitInverseSymbolic } from '../assets/icons/orientation-portrait-inverse-symbolic.svg';
import { ReactComponent as OrientationPortraitLeftSymbolic } from '../assets/icons/orientation-portrait-left-symbolic.svg';
import { ReactComponent as OrientationPortraitRightSymbolic } from '../assets/icons/orientation-portrait-right-symbolic.svg';
import { ReactComponent as OrientationPortraitSymbolic } from '../assets/icons/orientation-portrait-symbolic.svg';
import { ReactComponent as PackageXGenericSymbolic } from '../assets/icons/package-x-generic-symbolic.svg';
import { ReactComponent as PanDownSymbolic } from '../assets/icons/pan-down-symbolic.svg';
import { ReactComponent as PanEndSymbolicRtl } from '../assets/icons/pan-end-symbolic-rtl.svg';
import { ReactComponent as PanEndSymbolic } from '../assets/icons/pan-end-symbolic.svg';
import { ReactComponent as PanStartSymbolicRtl } from '../assets/icons/pan-start-symbolic-rtl.svg';
import { ReactComponent as PanStartSymbolic } from '../assets/icons/pan-start-symbolic.svg';
import { ReactComponent as PanUpSymbolic } from '../assets/icons/pan-up-symbolic.svg';
import { ReactComponent as PdaSymbolic } from '../assets/icons/pda-symbolic.svg';
import { ReactComponent as PhoneAppleIphoneSymbolic } from '../assets/icons/phone-apple-iphone-symbolic.svg';
import { ReactComponent as PhoneOldSymbolic } from '../assets/icons/phone-old-symbolic.svg';
import { ReactComponent as PhoneSymbolic } from '../assets/icons/phone-symbolic.svg';
import { ReactComponent as PowerProfileBalancedSymbolic } from '../assets/icons/power-profile-balanced-symbolic.svg';
import { ReactComponent as PowerProfilePerformanceSymbolic } from '../assets/icons/power-profile-performance-symbolic.svg';
import { ReactComponent as PowerProfilePowerSaverSymbolic } from '../assets/icons/power-profile-power-saver-symbolic.svg';
import { ReactComponent as PreferencesColorSymbolic } from '../assets/icons/preferences-color-symbolic.svg';
import { ReactComponent as PreferencesDesktopAccessibilitySymbolic } from '../assets/icons/preferences-desktop-accessibility-symbolic.svg';
import { ReactComponent as PreferencesDesktopAppsSymbolic } from '../assets/icons/preferences-desktop-apps-symbolic.svg';
import { ReactComponent as PreferencesDesktopDisplaySymbolic } from '../assets/icons/preferences-desktop-display-symbolic.svg';
import { ReactComponent as PreferencesDesktopFontSymbolic } from '../assets/icons/preferences-desktop-font-symbolic.svg';
import { ReactComponent as PreferencesDesktopKeyboardShortcutsSymbolic } from '../assets/icons/preferences-desktop-keyboard-shortcuts-symbolic.svg';
import { ReactComponent as PreferencesDesktopKeyboardSymbolic } from '../assets/icons/preferences-desktop-keyboard-symbolic.svg';
import { ReactComponent as PreferencesDesktopLocaleSymbolic } from '../assets/icons/preferences-desktop-locale-symbolic.svg';
import { ReactComponent as PreferencesDesktopRemoteDesktopSymbolic } from '../assets/icons/preferences-desktop-remote-desktop-symbolic.svg';
import { ReactComponent as PreferencesDesktopScreensaverSymbolic } from '../assets/icons/preferences-desktop-screensaver-symbolic.svg';
import { ReactComponent as PreferencesDesktopWallpaperSymbolic } from '../assets/icons/preferences-desktop-wallpaper-symbolic.svg';
import { ReactComponent as PreferencesOtherSymbolic } from '../assets/icons/preferences-other-symbolic.svg';
import { ReactComponent as PreferencesSystemDetailsSymbolic } from '../assets/icons/preferences-system-details-symbolic.svg';
import { ReactComponent as PreferencesSystemDevicesSymbolic } from '../assets/icons/preferences-system-devices-symbolic.svg';
import { ReactComponent as PreferencesSystemNetworkProxySymbolic } from '../assets/icons/preferences-system-network-proxy-symbolic.svg';
import { ReactComponent as PreferencesSystemNetworkSymbolic } from '../assets/icons/preferences-system-network-symbolic.svg';
import { ReactComponent as PreferencesSystemNotificationsSymbolic } from '../assets/icons/preferences-system-notifications-symbolic.svg';
import { ReactComponent as PreferencesSystemParentalControlsSymbolic } from '../assets/icons/preferences-system-parental-controls-symbolic.svg';
import { ReactComponent as PreferencesSystemPrivacySymbolic } from '../assets/icons/preferences-system-privacy-symbolic.svg';
import { ReactComponent as PreferencesSystemSearchSymbolic } from '../assets/icons/preferences-system-search-symbolic.svg';
import { ReactComponent as PreferencesSystemSharingSymbolic } from '../assets/icons/preferences-system-sharing-symbolic.svg';
import { ReactComponent as PreferencesSystemSymbolic } from '../assets/icons/preferences-system-symbolic.svg';
import { ReactComponent as PreferencesSystemTimeSymbolic } from '../assets/icons/preferences-system-time-symbolic.svg';
import { ReactComponent as PrinterErrorSymbolic } from '../assets/icons/printer-error-symbolic.svg';
import { ReactComponent as PrinterNetworkSymbolic } from '../assets/icons/printer-network-symbolic.svg';
import { ReactComponent as PrinterPrintingSymbolic } from '../assets/icons/printer-printing-symbolic.svg';
import { ReactComponent as PrinterSymbolic } from '../assets/icons/printer-symbolic.svg';
import { ReactComponent as PrinterWarningSymbolic } from '../assets/icons/printer-warning-symbolic.svg';
import { ReactComponent as ProcessStopSymbolic } from '../assets/icons/process-stop-symbolic.svg';
import { ReactComponent as ProcessWorkingSymbolic } from '../assets/icons/process-working-symbolic.svg';
import { ReactComponent as RadioCheckedSymbolic } from '../assets/icons/radio-checked-symbolic.svg';
import { ReactComponent as RadioMixedSymbolic } from '../assets/icons/radio-mixed-symbolic.svg';
import { ReactComponent as RadioSymbolic } from '../assets/icons/radio-symbolic.svg';
import { ReactComponent as RotationAllowedSymbolic } from '../assets/icons/rotation-allowed-symbolic.svg';
import { ReactComponent as RotationLockedSymbolic } from '../assets/icons/rotation-locked-symbolic.svg';
import { ReactComponent as ScannerSymbolic } from '../assets/icons/scanner-symbolic.svg';
import { ReactComponent as ScreenSharedSymbolic } from '../assets/icons/screen-shared-symbolic.svg';
import { ReactComponent as SecurityHighSymbolic } from '../assets/icons/security-high-symbolic.svg';
import { ReactComponent as SecurityLowSymbolic } from '../assets/icons/security-low-symbolic.svg';
import { ReactComponent as SecurityMediumSymbolic } from '../assets/icons/security-medium-symbolic.svg';
import { ReactComponent as SelectionEndSymbolic } from '../assets/icons/selection-end-symbolic.svg';
import { ReactComponent as SelectionStartSymbolic } from '../assets/icons/selection-start-symbolic.svg';
import { ReactComponent as SemiStarredSymbolicRtl } from '../assets/icons/semi-starred-symbolic-rtl.svg';
import { ReactComponent as SemiStarredSymbolic } from '../assets/icons/semi-starred-symbolic.svg';
import { ReactComponent as SendToSymbolic } from '../assets/icons/send-to-symbolic.svg';
import { ReactComponent as SidebarHideSymbolic } from '../assets/icons/sidebar-hide-symbolic.svg';
import { ReactComponent as SidebarShowSymbolic } from '../assets/icons/sidebar-show-symbolic.svg';
import { ReactComponent as SoftwareUpdateAvailableSymbolic } from '../assets/icons/software-update-available-symbolic.svg';
import { ReactComponent as SoftwareUpdateUrgentSymbolic } from '../assets/icons/software-update-urgent-symbolic.svg';
import { ReactComponent as StarNewSymbolic } from '../assets/icons/star-new-symbolic.svg';
import { ReactComponent as StarredSymbolic } from '../assets/icons/starred-symbolic.svg';
import { ReactComponent as StartHereSymbolic } from '../assets/icons/start-here-symbolic.svg';
import { ReactComponent as SwitchOff } from '../assets/icons/switch-off-symbolic.svg';
import { ReactComponent as SwitchOn } from '../assets/icons/switch-on-symbolic.svg';
import { ReactComponent as SystemFileManagerSymbolic } from '../assets/icons/system-file-manager-symbolic.svg';
import { ReactComponent as SystemHelpSymbolic } from '../assets/icons/system-help-symbolic.svg';
import { ReactComponent as SystemLockScreenSymbolic } from '../assets/icons/system-lock-screen-symbolic.svg';
import { ReactComponent as SystemLogOutSymbolic } from '../assets/icons/system-log-out-symbolic.svg';
import { ReactComponent as SystemRebootSymbolic } from '../assets/icons/system-reboot-symbolic.svg';
import { ReactComponent as SystemRunSymbolic } from '../assets/icons/system-run-symbolic.svg';
import { ReactComponent as SystemSearchSymbolic } from '../assets/icons/system-search-symbolic.svg';
import { ReactComponent as SystemShutdownSymbolic } from '../assets/icons/system-shutdown-symbolic.svg';
import { ReactComponent as SystemSoftwareInstallSymbolic } from '../assets/icons/system-software-install-symbolic.svg';
import { ReactComponent as SystemSwitchUserSymbolic } from '../assets/icons/system-switch-user-symbolic.svg';
import { ReactComponent as SystemUsersSymbolic } from '../assets/icons/system-users-symbolic.svg';
import { ReactComponent as TabNewSymbolic } from '../assets/icons/tab-new-symbolic.svg';
import { ReactComponent as TaskDueSymbolic } from '../assets/icons/task-due-symbolic.svg';
import { ReactComponent as TaskPastDueSymbolic } from '../assets/icons/task-past-due-symbolic.svg';
import { ReactComponent as TextEditorSymbolic } from '../assets/icons/text-editor-symbolic.svg';
import { ReactComponent as TextXGenericSymbolic } from '../assets/icons/text-x-generic-symbolic.svg';
import { ReactComponent as ThunderboltAcquiringSymbolic } from '../assets/icons/thunderbolt-acquiring-symbolic.svg';
import { ReactComponent as ThunderboltSymbolic } from '../assets/icons/thunderbolt-symbolic.svg';
import { ReactComponent as ToolsCheckSpellingSymbolic } from '../assets/icons/tools-check-spelling-symbolic.svg';
import { ReactComponent as TouchDisabledSymbolic } from '../assets/icons/touch-disabled-symbolic.svg';
import { ReactComponent as TouchpadDisabledSymbolic } from '../assets/icons/touchpad-disabled-symbolic.svg';
import { ReactComponent as TvSymbolic } from '../assets/icons/tv-symbolic.svg';
import { ReactComponent as UninterruptiblePowerSupplySymbolic } from '../assets/icons/uninterruptible-power-supply-symbolic.svg';
import { ReactComponent as UserAvailableSymbolic } from '../assets/icons/user-available-symbolic.svg';
import { ReactComponent as UserAwaySymbolic } from '../assets/icons/user-away-symbolic.svg';
import { ReactComponent as UserBookmarksSymbolic } from '../assets/icons/user-bookmarks-symbolic.svg';
import { ReactComponent as UserBusySymbolic } from '../assets/icons/user-busy-symbolic.svg';
import { ReactComponent as UserDesktopSymbolic } from '../assets/icons/user-desktop-symbolic.svg';
import { ReactComponent as UserHomeSymbolic } from '../assets/icons/user-home-symbolic.svg';
import { ReactComponent as UserIdleSymbolic } from '../assets/icons/user-idle-symbolic.svg';
import { ReactComponent as UserInfoSymbolic } from '../assets/icons/user-info-symbolic.svg';
import { ReactComponent as UserInvisibleSymbolic } from '../assets/icons/user-invisible-symbolic.svg';
import { ReactComponent as UserNotTrackedSymbolic } from '../assets/icons/user-not-tracked-symbolic.svg';
import { ReactComponent as UserOfflineSymbolic } from '../assets/icons/user-offline-symbolic.svg';
import { ReactComponent as UserStatusPendingSymbolic } from '../assets/icons/user-status-pending-symbolic.svg';
import { ReactComponent as UserTrashFullSymbolic } from '../assets/icons/user-trash-full-symbolic.svg';
import { ReactComponent as UserTrashSymbolic } from '../assets/icons/user-trash-symbolic.svg';
import { ReactComponent as UtilitiesTerminalSymbolic } from '../assets/icons/utilities-terminal-symbolic.svg';
import { ReactComponent as ValueDecreaseSymbolic } from '../assets/icons/value-decrease-symbolic.svg';
import { ReactComponent as ValueIncreaseSymbolic } from '../assets/icons/value-increase-symbolic.svg';
import { ReactComponent as VideoDisplaySymbolic } from '../assets/icons/video-display-symbolic.svg';
import { ReactComponent as VideoJoinedDisplaysSymbolic } from '../assets/icons/video-joined-displays-symbolic.svg';
import { ReactComponent as VideoSingleDisplaySymbolic } from '../assets/icons/video-single-display-symbolic.svg';
import { ReactComponent as VideoXGenericSymbolic } from '../assets/icons/video-x-generic-symbolic.svg';
import { ReactComponent as ViewAppGridSymbolic } from '../assets/icons/view-app-grid-symbolic.svg';
import { ReactComponent as ViewConcealSymbolic } from '../assets/icons/view-conceal-symbolic.svg';
import { ReactComponent as ViewContinuousSymbolic } from '../assets/icons/view-continuous-symbolic.svg';
import { ReactComponent as ViewDualSymbolic } from '../assets/icons/view-dual-symbolic.svg';
import { ReactComponent as ViewFullscreenSymbolic } from '../assets/icons/view-fullscreen-symbolic.svg';
import { ReactComponent as ViewGridSymbolic } from '../assets/icons/view-grid-symbolic.svg';
import { ReactComponent as ViewListBulletSymbolic } from '../assets/icons/view-list-bullet-symbolic.svg';
import { ReactComponent as ViewListOrderedSymbolic } from '../assets/icons/view-list-ordered-symbolic.svg';
import { ReactComponent as ViewListSymbolic } from '../assets/icons/view-list-symbolic.svg';
import { ReactComponent as ViewMirrorSymbolic } from '../assets/icons/view-mirror-symbolic.svg';
import { ReactComponent as ViewMoreHorizontalSymbolic } from '../assets/icons/view-more-horizontal-symbolic.svg';
import { ReactComponent as ViewMoreSymbolic } from '../assets/icons/view-more-symbolic.svg';
import { ReactComponent as ViewPagedSymbolic } from '../assets/icons/view-paged-symbolic.svg';
import { ReactComponent as ViewPinSymbolic } from '../assets/icons/view-pin-symbolic.svg';
import { ReactComponent as ViewRefreshSymbolic } from '../assets/icons/view-refresh-symbolic.svg';
import { ReactComponent as ViewRestoreSymbolic } from '../assets/icons/view-restore-symbolic.svg';
import { ReactComponent as ViewRevealSymbolic } from '../assets/icons/view-reveal-symbolic.svg';
import { ReactComponent as ViewSortAscendingSymbolic } from '../assets/icons/view-sort-ascending-symbolic.svg';
import { ReactComponent as ViewSortDescendingSymbolic } from '../assets/icons/view-sort-descending-symbolic.svg';
import { ReactComponent as ViewWrappedSymbolicRtl } from '../assets/icons/view-wrapped-symbolic-rtl.svg';
import { ReactComponent as ViewWrappedSymbolic } from '../assets/icons/view-wrapped-symbolic.svg';
import { ReactComponent as WeatherClearNightSymbolic } from '../assets/icons/weather-clear-night-symbolic.svg';
import { ReactComponent as WeatherClearSymbolic } from '../assets/icons/weather-clear-symbolic.svg';
import { ReactComponent as WeatherFewCloudsNightSymbolic } from '../assets/icons/weather-few-clouds-night-symbolic.svg';
import { ReactComponent as WeatherFewCloudsSymbolic } from '../assets/icons/weather-few-clouds-symbolic.svg';
import { ReactComponent as WeatherFogSymbolic } from '../assets/icons/weather-fog-symbolic.svg';
import { ReactComponent as WeatherOvercastSymbolic } from '../assets/icons/weather-overcast-symbolic.svg';
import { ReactComponent as WeatherSevereAlertSymbolic } from '../assets/icons/weather-severe-alert-symbolic.svg';
import { ReactComponent as WeatherShowersScatteredSymbolic } from '../assets/icons/weather-showers-scattered-symbolic.svg';
import { ReactComponent as WeatherShowersSymbolic } from '../assets/icons/weather-showers-symbolic.svg';
import { ReactComponent as WeatherSnowSymbolic } from '../assets/icons/weather-snow-symbolic.svg';
import { ReactComponent as WeatherStormSymbolic } from '../assets/icons/weather-storm-symbolic.svg';
import { ReactComponent as WeatherTornadoSymbolic } from '../assets/icons/weather-tornado-symbolic.svg';
import { ReactComponent as WeatherWindySymbolic } from '../assets/icons/weather-windy-symbolic.svg';
import { ReactComponent as WebBrowserSymbolic } from '../assets/icons/web-browser-symbolic.svg';
import { ReactComponent as WindowCloseSymbolic } from '../assets/icons/window-close-symbolic.svg';
import { ReactComponent as WindowMaximizeSymbolic } from '../assets/icons/window-maximize-symbolic.svg';
import { ReactComponent as WindowMinimizeSymbolic } from '../assets/icons/window-minimize-symbolic.svg';
import { ReactComponent as WindowNewSymbolic } from '../assets/icons/window-new-symbolic.svg';
import { ReactComponent as WindowRestoreSymbolic } from '../assets/icons/window-restore-symbolic.svg';
import { ReactComponent as XOfficeAddressBookSymbolic } from '../assets/icons/x-office-address-book-symbolic.svg';
import { ReactComponent as XOfficeCalendarSymbolic } from '../assets/icons/x-office-calendar-symbolic.svg';
import { ReactComponent as XOfficeDocumentSymbolic } from '../assets/icons/x-office-document-symbolic.svg';
import { ReactComponent as XOfficeDrawingSymbolic } from '../assets/icons/x-office-drawing-symbolic.svg';
import { ReactComponent as XOfficePresentationSymbolic } from '../assets/icons/x-office-presentation-symbolic.svg';
import { ReactComponent as XOfficeSpreadsheetSymbolic } from '../assets/icons/x-office-spreadsheet-symbolic.svg';
import { ReactComponent as ZoomFitBestSymbolic } from '../assets/icons/zoom-fit-best-symbolic.svg';
import { ReactComponent as ZoomInSymbolic } from '../assets/icons/zoom-in-symbolic.svg';
import { ReactComponent as ZoomOriginalSymbolic } from '../assets/icons/zoom-original-symbolic.svg';
import { ReactComponent as ZoomOutSymbolic } from '../assets/icons/zoom-out-symbolic.svg';


export const Icons = {
  'ac-adapter': AcAdapterSymbolic,
  'accessories-calculator': AccessoriesCalculatorSymbolic,
  'accessories-character-map': AccessoriesCharacterMapSymbolic,
  'accessories-dictionary': AccessoriesDictionarySymbolic,
  'accessories-text-editor': AccessoriesTextEditorSymbolic,
  'action-unavailable': ActionUnavailableSymbolic,
  'address-book-new': AddressBookNewSymbolic,
  'airplane-mode': AirplaneModeSymbolic,
  alarm: AlarmSymbolic,
  'applets-screenshooter': AppletsScreenshooterSymbolic,
  'application-certificate': ApplicationCertificateSymbolic,
  'application-exit': ApplicationExitSymbolic,
  'application-rss-xml': ApplicationRssXmlSymbolic,
  'applications-engineering': ApplicationsEngineeringSymbolic,
  'applications-games': ApplicationsGamesSymbolic,
  'applications-graphics': ApplicationsGraphicsSymbolic,
  'applications-multimedia': ApplicationsMultimediaSymbolic,
  'applications-science': ApplicationsScienceSymbolic,
  'applications-system': ApplicationsSystemSymbolic,
  'applications-utilities': ApplicationsUtilitiesSymbolic,
  'application-x-addon': ApplicationXAddonSymbolic,
  'application-x-appliance': ApplicationXApplianceSymbolic,
  'application-x-executable': ApplicationXExecutableSymbolic,
  'application-x-firmware': ApplicationXFirmwareSymbolic,
  'appointment-missed': AppointmentMissedSymbolic,
  'appointment-new': AppointmentNewSymbolic,
  'appointment-soon': AppointmentSoonSymbolic,
  'audio-card': AudioCardSymbolic,
  'audio-headphones': AudioHeadphonesSymbolic,
  'audio-headset': AudioHeadsetSymbolic,
  'audio-input-microphone': AudioInputMicrophoneSymbolic,
  'audio-speakers': AudioSpeakersSymbolic,
  'audio-volume-high': AudioVolumeHighSymbolic,
  'audio-volume-low': AudioVolumeLowSymbolic,
  'audio-volume-medium': AudioVolumeMediumSymbolic,
  'audio-volume-muted': AudioVolumeMutedSymbolic,
  'audio-volume-overamplified': AudioVolumeOveramplifiedSymbolic,
  'audio-x-generic': AudioXGenericSymbolic,
  'auth-fingerprint': AuthFingerprintSymbolic,
  'auth-sim-locked': AuthSimLockedSymbolic,
  'auth-sim-missing': AuthSimMissingSymbolic,
  'auth-sim': AuthSimSymbolic,
  'auth-smartcard': AuthSmartcardSymbolic,
  'avatar-default': AvatarDefaultSymbolic,
  'battery-caution-charging': BatteryCautionChargingSymbolic,
  'battery-caution': BatteryCautionSymbolic,
  'battery-empty-charging': BatteryEmptyChargingSymbolic,
  'battery-empty': BatteryEmptySymbolic,
  'battery-full-charged': BatteryFullChargedSymbolic,
  'battery-full-charging': BatteryFullChargingSymbolic,
  'battery-full': BatteryFullSymbolic,
  'battery-good-charging': BatteryGoodChargingSymbolic,
  'battery-good': BatteryGoodSymbolic,
  'battery-level-0-charging': BatteryLevel0ChargingSymbolic,
  'battery-level-0': BatteryLevel0Symbolic,
  'battery-level-100-charged': BatteryLevel100ChargedSymbolic,
  'battery-level-100': BatteryLevel100Symbolic,
  'battery-level-10-charging': BatteryLevel10ChargingSymbolic,
  'battery-level-10': BatteryLevel10Symbolic,
  'battery-level-20-charging': BatteryLevel20ChargingSymbolic,
  'battery-level-20': BatteryLevel20Symbolic,
  'battery-level-30-charging': BatteryLevel30ChargingSymbolic,
  'battery-level-30': BatteryLevel30Symbolic,
  'battery-level-40-charging': BatteryLevel40ChargingSymbolic,
  'battery-level-40': BatteryLevel40Symbolic,
  'battery-level-50-charging': BatteryLevel50ChargingSymbolic,
  'battery-level-50': BatteryLevel50Symbolic,
  'battery-level-60-charging': BatteryLevel60ChargingSymbolic,
  'battery-level-60': BatteryLevel60Symbolic,
  'battery-level-70-charging': BatteryLevel70ChargingSymbolic,
  'battery-level-70': BatteryLevel70Symbolic,
  'battery-level-80-charging': BatteryLevel80ChargingSymbolic,
  'battery-level-80': BatteryLevel80Symbolic,
  'battery-level-90-charging': BatteryLevel90ChargingSymbolic,
  'battery-level-90': BatteryLevel90Symbolic,
  'battery-low-charging': BatteryLowChargingSymbolic,
  'battery-low': BatteryLowSymbolic,
  'battery-missing': BatteryMissingSymbolic,
  battery: BatterySymbolic,
  'bluetooth-active': BluetoothActiveSymbolic,
  'bluetooth-disabled': BluetoothDisabledSymbolic,
  'bluetooth-disconnected': BluetoothDisconnectedSymbolic,
  'bluetooth-hardware-disabled': BluetoothHardwareDisabledSymbolic,
  bluetooth: BluetoothSymbolic,
  'bookmark-new': BookmarkNewSymbolic,
  'call-incoming': CallIncomingSymbolic,
  'call-missed': CallMissedSymbolic,
  'call-outgoing': CallOutgoingSymbolic,
  'call-start': CallStartSymbolic,
  'call-stop': CallStopSymbolic,
  'camera-disabled': CameraDisabledSymbolic,
  'camera-hardware-disabled': CameraHardwareDisabledSymbolic,
  'camera-photo': CameraPhotoSymbolic,
  'camera-switch': CameraSwitchSymbolic,
  'camera-video': CameraVideoSymbolic,
  'camera-web': CameraWebSymbolic,
  'caps-lock': CapsLockSymbolic,
  'changes-allow': ChangesAllowSymbolic,
  'changes-prevent': ChangesPreventSymbolic,
  'channel-insecure': ChannelInsecureSymbolic,
  'channel-secure': ChannelSecureSymbolic,
  'chat-message-new': ChatMessageNewSymbolic,
  'checkbox-checked': CheckboxCheckedSymbolic,
  'checkbox-mixed': CheckboxMixedSymbolic,
  checkbox: CheckboxSymbolic,
  'colorimeter-colorhug': ColorimeterColorhugSymbolic,
  'color-select': ColorSelectSymbolic,
  'computer-apple-ipad': ComputerAppleIpadSymbolic,
  'computer-fail': ComputerFailSymbolic,
  computer: ComputerSymbolic,
  'contact-new': ContactNewSymbolic,
  'content-loading': ContentLoadingSymbolic,
  'daytime-sunrise': DaytimeSunriseSymbolic,
  'daytime-sunset': DaytimeSunsetSymbolic,
  'dialog-error': DialogErrorSymbolic,
  'dialog-information': DialogInformationSymbolic,
  'dialog-password': DialogPasswordSymbolic,
  'dialog-question': DialogQuestionSymbolic,
  'dialog-warning': DialogWarningSymbolic,
  'display-brightness': DisplayBrightnessSymbolic,
  'display-projector': DisplayProjectorSymbolic,
  'document-edit': DocumentEditSymbolic,
  'document-new': DocumentNewSymbolic,
  'document-open-recent': DocumentOpenRecentSymbolic,
  'document-open': DocumentOpenSymbolic,
  'document-page-setup': DocumentPageSetupSymbolic,
  'document-print-preview': DocumentPrintPreviewSymbolic,
  'document-print': DocumentPrintSymbolic,
  'document-properties': DocumentPropertiesSymbolic,
  'document-revert-rtl': DocumentRevertSymbolicRtl,
  'document-revert': DocumentRevertSymbolic,
  'document-save-as': DocumentSaveAsSymbolic,
  'document-save': DocumentSaveSymbolic,
  'document-send': DocumentSendSymbolic,
  'drive-harddisk-ieee1394': DriveHarddiskIeee1394Symbolic,
  'drive-harddisk-solidstate': DriveHarddiskSolidstateSymbolic,
  'drive-harddisk': DriveHarddiskSymbolic,
  'drive-harddisk-system': DriveHarddiskSystemSymbolic,
  'drive-harddisk-usb': DriveHarddiskUsbSymbolic,
  'drive-multidisk': DriveMultidiskSymbolic,
  'drive-optical': DriveOpticalSymbolic,
  'drive-removable-media': DriveRemovableMediaSymbolic,
  'edit-clear-all': EditClearAllSymbolic,
  'edit-clear-rtl': EditClearSymbolicRtl,
  'edit-clear': EditClearSymbolic,
  'edit-copy': EditCopySymbolic,
  'edit-cut': EditCutSymbolic,
  'edit-delete': EditDeleteSymbolic,
  'edit-find-replace': EditFindReplaceSymbolic,
  'edit-find': EditFindSymbolic,
  'edit-paste': EditPasteSymbolic,
  'edit-redo': EditRedoSymbolic,
  'edit-select-all': EditSelectAllSymbolic,
  'edit-select': EditSelectSymbolic,
  'edit-undo': EditUndoSymbolic,
  'emblem-default': EmblemDefaultSymbolic,
  'emblem-documents': EmblemDocumentsSymbolic,
  'emblem-favorite': EmblemFavoriteSymbolic,
  'emblem-important': EmblemImportantSymbolic,
  'emblem-music': EmblemMusicSymbolic,
  'emblem-ok': EmblemOkSymbolic,
  'emblem-photos': EmblemPhotosSymbolic,
  'emblem-shared': EmblemSharedSymbolic,
  'emblem-synchronizing': EmblemSynchronizingSymbolic,
  'emblem-system': EmblemSystemSymbolic,
  'emblem-videos': EmblemVideosSymbolic,
  'emoji-activities': EmojiActivitiesSymbolic,
  'emoji-body': EmojiBodySymbolic,
  'emoji-flags': EmojiFlagsSymbolic,
  'emoji-food': EmojiFoodSymbolic,
  'emoji-nature': EmojiNatureSymbolic,
  'emoji-objects': EmojiObjectsSymbolic,
  'emoji-people': EmojiPeopleSymbolic,
  'emoji-recent': EmojiRecentSymbolic,
  'emoji-symbols': EmojiSymbolsSymbolic,
  'emoji-travel': EmojiTravelSymbolic,
  'emote-love': EmoteLoveSymbolic,
  'error-correct': ErrorCorrectSymbolic,
  'eye-not-looking': EyeNotLookingSymbolic,
  'eye-open-negative-filled': EyeOpenNegativeFilledSymbolic,
  'face-angel': FaceAngelSymbolic,
  'face-angry': FaceAngrySymbolic,
  'face-confused': FaceConfusedSymbolic,
  'face-cool': FaceCoolSymbolic,
  'face-crying': FaceCryingSymbolic,
  'face-devilish': FaceDevilishSymbolic,
  'face-embarrassed': FaceEmbarrassedSymbolic,
  'face-glasses': FaceGlassesSymbolic,
  'face-kiss': FaceKissSymbolic,
  'face-laugh': FaceLaughSymbolic,
  'face-monkey': FaceMonkeySymbolic,
  'face-plain': FacePlainSymbolic,
  'face-raspberry': FaceRaspberrySymbolic,
  'face-sad': FaceSadSymbolic,
  'face-shutmouth': FaceShutmouthSymbolic,
  'face-sick': FaceSickSymbolic,
  'face-smile-big': FaceSmileBigSymbolic,
  'face-smile': FaceSmileSymbolic,
  'face-smirk': FaceSmirkSymbolic,
  'face-surprise': FaceSurpriseSymbolic,
  'face-tired': FaceTiredSymbolic,
  'face-uncertain': FaceUncertainSymbolic,
  'face-wink': FaceWinkSymbolic,
  'face-worried': FaceWorriedSymbolic,
  'face-yawn': FaceYawnSymbolic,
  'find-location': FindLocationSymbolic,
  'focus-legacy-systray': FocusLegacySystraySymbolic,
  'focus-top-bar': FocusTopBarSymbolic,
  'focus-windows': FocusWindowsSymbolic,
  'folder-documents': FolderDocumentsSymbolic,
  'folder-download': FolderDownloadSymbolic,
  'folder-drag-accept': FolderDragAcceptSymbolic,
  'folder-music': FolderMusicSymbolic,
  'folder-new': FolderNewSymbolic,
  'folder-open': FolderOpenSymbolic,
  'folder-pictures': FolderPicturesSymbolic,
  'folder-publicshare': FolderPublicshareSymbolic,
  'folder-remote': FolderRemoteSymbolic,
  'folder-saved-search': FolderSavedSearchSymbolic,
  folder: FolderSymbolic,
  'folder-templates': FolderTemplatesSymbolic,
  'folder-videos': FolderVideosSymbolic,
  'folder-visiting': FolderVisitingSymbolic,
  'font-select': FontSelectSymbolic,
  'font-x-generic': FontXGenericSymbolic,
  'format-indent-less': FormatIndentLessSymbolic,
  'format-indent-more': FormatIndentMoreSymbolic,
  'format-justify-center': FormatJustifyCenterSymbolic,
  'format-justify-fill': FormatJustifyFillSymbolic,
  'format-justify-left': FormatJustifyLeftSymbolic,
  'format-justify-right': FormatJustifyRightSymbolic,
  'format-text-bold': FormatTextBoldSymbolic,
  'format-text-direction-rtl': FormatTextDirectionSymbolicRtl,
  'format-text-direction': FormatTextDirectionSymbolic,
  'format-text-italic': FormatTextItalicSymbolic,
  'format-text-strikethrough': FormatTextStrikethroughSymbolic,
  'format-text-underline': FormatTextUnderlineSymbolic,
  'gnome-power-manager': GnomePowerManagerSymbolic,
  'goa-panel': GoaPanelSymbolic,
  'go-bottom': GoBottomSymbolic,
  'go-down': GoDownSymbolic,
  'go-first': GoFirstSymbolic,
  'go-home': GoHomeSymbolic,
  'go-jump-rtl': GoJumpSymbolicRtl,
  'go-jump': GoJumpSymbolic,
  'go-last': GoLastSymbolic,
  'go-next': GoNextSymbolic,
  'go-previous': GoPreviousSymbolic,
  'go-top': GoTopSymbolic,
  'go-up': GoUpSymbolic,
  'help-about': HelpAboutSymbolic,
  'help-browser': HelpBrowserSymbolic,
  'help-contents': HelpContentsSymbolic,
  'help-faq': HelpFaqSymbolic,
  'image-loading': ImageLoadingSymbolic,
  'image-x-generic': ImageXGenericSymbolic,
  'inode-directory': InodeDirectorySymbolic,
  'input-dialpad': InputDialpadSymbolic,
  'input-gaming': InputGamingSymbolic,
  'input-keyboard': InputKeyboardSymbolic,
  'input-mouse': InputMouseSymbolic,
  'input-tablet': InputTabletSymbolic,
  'input-touchpad': InputTouchpadSymbolic,
  'insert-image': InsertImageSymbolic,
  'insert-link': InsertLinkSymbolic,
  'insert-object': InsertObjectSymbolic,
  'insert-text': InsertTextSymbolic,
  'keyboard-brightness': KeyboardBrightnessSymbolic,
  'list-add': ListAddSymbolic,
  'list-drag-handle': ListDragHandleSymbolic,
  'list-remove-all': ListRemoveAllSymbolic,
  'list-remove': ListRemoveSymbolic,
  'location-services-active': LocationServicesActiveSymbolic,
  'location-services-disabled': LocationServicesDisabledSymbolic,
  'mail-attachment': MailAttachmentSymbolic,
  'mail-forward': MailForwardSymbolic,
  'mail-mark-important': MailMarkImportantSymbolic,
  'mail-mark-junk': MailMarkJunkSymbolic,
  'mail-mark-notjunk': MailMarkNotjunkSymbolic,
  'mail-message-new': MailMessageNewSymbolic,
  'mail-read': MailReadSymbolic,
  'mail-replied': MailRepliedSymbolic,
  'mail-reply-all': MailReplyAllSymbolic,
  'mail-reply-sender': MailReplySenderSymbolic,
  'mail-send-receive': MailSendReceiveSymbolic,
  'mail-send': MailSendSymbolic,
  'mail-unread': MailUnreadSymbolic,
  'mark-location': MarkLocationSymbolic,
  'media-eject': MediaEjectSymbolic,
  'media-flash': MediaFlashSymbolic,
  'media-floppy': MediaFloppySymbolic,
  'media-optical-bd': MediaOpticalBdSymbolic,
  'media-optical-cd-audio': MediaOpticalCdAudioSymbolic,
  'media-optical-dvd': MediaOpticalDvdSymbolic,
  'media-optical': MediaOpticalSymbolic,
  'media-playback-pause': MediaPlaybackPauseSymbolic,
  'media-playback-start-rtl': MediaPlaybackStartSymbolicRtl,
  'media-playback-start': MediaPlaybackStartSymbolic,
  'media-playback-stop': MediaPlaybackStopSymbolic,
  'media-playlist-consecutive': MediaPlaylistConsecutiveSymbolic,
  'media-playlist-repeat-song': MediaPlaylistRepeatSongSymbolic,
  'media-playlist-repeat': MediaPlaylistRepeatSymbolic,
  'media-playlist-shuffle': MediaPlaylistShuffleSymbolic,
  'media-record': MediaRecordSymbolic,
  'media-removable': MediaRemovableSymbolic,
  'media-seek-backward': MediaSeekBackwardSymbolic,
  'media-seek-forward': MediaSeekForwardSymbolic,
  'media-skip-backward': MediaSkipBackwardSymbolic,
  'media-skip-forward': MediaSkipForwardSymbolic,
  'media-tape': MediaTapeSymbolic,
  'media-view-subtitles': MediaViewSubtitlesSymbolic,
  'media-zip': MediaZipSymbolic,
  'microphone-disabled': MicrophoneDisabledSymbolic,
  'microphone-hardware-disabled': MicrophoneHardwareDisabledSymbolic,
  'microphone-sensitivity-high': MicrophoneSensitivityHighSymbolic,
  'microphone-sensitivity-low': MicrophoneSensitivityLowSymbolic,
  'microphone-sensitivity-medium': MicrophoneSensitivityMediumSymbolic,
  'microphone-sensitivity-muted': MicrophoneSensitivityMutedSymbolic,
  modem: ModemSymbolic,
  'multimedia-player-apple-ipod-touch': MultimediaPlayerAppleIpodTouchSymbolic,
  'multimedia-player': MultimediaPlayerSymbolic,
  'multimedia-volume-control': MultimediaVolumeControlSymbolic,
  'network-cellular-2g': NetworkCellular2gSymbolic,
  'network-cellular-3g': NetworkCellular3gSymbolic,
  'network-cellular-4g': NetworkCellular4gSymbolic,
  'network-cellular-acquiring': NetworkCellularAcquiringSymbolic,
  'network-cellular-connected': NetworkCellularConnectedSymbolic,
  'network-cellular-disabled': NetworkCellularDisabledSymbolic,
  'network-cellular-edge': NetworkCellularEdgeSymbolic,
  'network-cellular-gprs': NetworkCellularGprsSymbolic,
  'network-cellular-hardware-disabled': NetworkCellularHardwareDisabledSymbolic,
  'network-cellular-hspa': NetworkCellularHspaSymbolic,
  'network-cellular-no-route': NetworkCellularNoRouteSymbolic,
  'network-cellular-offline': NetworkCellularOfflineSymbolic,
  'network-cellular-signal-excellent': NetworkCellularSignalExcellentSymbolic,
  'network-cellular-signal-good': NetworkCellularSignalGoodSymbolic,
  'network-cellular-signal-none': NetworkCellularSignalNoneSymbolic,
  'network-cellular-signal-ok': NetworkCellularSignalOkSymbolic,
  'network-cellular-signal-weak': NetworkCellularSignalWeakSymbolic,
  'network-cellular': NetworkCellularSymbolic,
  'network-error': NetworkErrorSymbolic,
  'network-idle': NetworkIdleSymbolic,
  'network-no-route': NetworkNoRouteSymbolic,
  'network-offline': NetworkOfflineSymbolic,
  'network-receive': NetworkReceiveSymbolic,
  'network-server': NetworkServerSymbolic,
  'network-transmit-receive': NetworkTransmitReceiveSymbolic,
  'network-transmit': NetworkTransmitSymbolic,
  'network-vpn-acquiring': NetworkVpnAcquiringSymbolic,
  'network-vpn-no-route': NetworkVpnNoRouteSymbolic,
  'network-vpn': NetworkVpnSymbolic,
  'network-wired-acquiring': NetworkWiredAcquiringSymbolic,
  'network-wired-disconnected': NetworkWiredDisconnectedSymbolic,
  'network-wired-no-route': NetworkWiredNoRouteSymbolic,
  'network-wired-offline': NetworkWiredOfflineSymbolic,
  'network-wired': NetworkWiredSymbolic,
  'network-wireless-acquiring': NetworkWirelessAcquiringSymbolic,
  'network-wireless-connected': NetworkWirelessConnectedSymbolic,
  'network-wireless-disabled': NetworkWirelessDisabledSymbolic,
  'network-wireless-encrypted': NetworkWirelessEncryptedSymbolic,
  'network-wireless-hardware-disabled': NetworkWirelessHardwareDisabledSymbolic,
  'network-wireless-hotspot': NetworkWirelessHotspotSymbolic,
  'network-wireless-no-route': NetworkWirelessNoRouteSymbolic,
  'network-wireless-offline': NetworkWirelessOfflineSymbolic,
  'network-wireless-signal-excellent': NetworkWirelessSignalExcellentSymbolic,
  'network-wireless-signal-good': NetworkWirelessSignalGoodSymbolic,
  'network-wireless-signal-none': NetworkWirelessSignalNoneSymbolic,
  'network-wireless-signal-ok': NetworkWirelessSignalOkSymbolic,
  'network-wireless-signal-weak': NetworkWirelessSignalWeakSymbolic,
  'network-wireless': NetworkWirelessSymbolic,
  'network-workgroup': NetworkWorkgroupSymbolic,
  'night-light': NightLightSymbolic,
  'non-starred': NonStarredSymbolic,
  'notifications-disabled': NotificationsDisabledSymbolic,
  'object-flip-horizontal': ObjectFlipHorizontalSymbolic,
  'object-flip-vertical': ObjectFlipVerticalSymbolic,
  'object-rotate-left': ObjectRotateLeftSymbolic,
  'object-rotate-right': ObjectRotateRightSymbolic,
  'object-select': ObjectSelectSymbolic,
  'open-menu': OpenMenuSymbolic,
  'orientation-landscape-inverse': OrientationLandscapeInverseSymbolic,
  'orientation-landscape': OrientationLandscapeSymbolic,
  'orientation-portrait-inverse': OrientationPortraitInverseSymbolic,
  'orientation-portrait-left': OrientationPortraitLeftSymbolic,
  'orientation-portrait-right': OrientationPortraitRightSymbolic,
  'orientation-portrait': OrientationPortraitSymbolic,
  'package-x-generic': PackageXGenericSymbolic,
  'pan-down': PanDownSymbolic,
  'pan-end-rtl': PanEndSymbolicRtl,
  'pan-end': PanEndSymbolic,
  'pan-start-rtl': PanStartSymbolicRtl,
  'pan-start': PanStartSymbolic,
  'pan-up': PanUpSymbolic,
  pda: PdaSymbolic,
  'phone-apple-iphone': PhoneAppleIphoneSymbolic,
  'phone-old': PhoneOldSymbolic,
  phone: PhoneSymbolic,
  'power-profile-balanced': PowerProfileBalancedSymbolic,
  'power-profile-performance': PowerProfilePerformanceSymbolic,
  'power-profile-power-saver': PowerProfilePowerSaverSymbolic,
  'preferences-color': PreferencesColorSymbolic,
  'preferences-desktop-accessibility': PreferencesDesktopAccessibilitySymbolic,
  'preferences-desktop-apps': PreferencesDesktopAppsSymbolic,
  'preferences-desktop-display': PreferencesDesktopDisplaySymbolic,
  'preferences-desktop-font': PreferencesDesktopFontSymbolic,
  'preferences-desktop-keyboard-shortcuts': PreferencesDesktopKeyboardShortcutsSymbolic,
  'preferences-desktop-keyboard': PreferencesDesktopKeyboardSymbolic,
  'preferences-desktop-locale': PreferencesDesktopLocaleSymbolic,
  'preferences-desktop-remote-desktop': PreferencesDesktopRemoteDesktopSymbolic,
  'preferences-desktop-screensaver': PreferencesDesktopScreensaverSymbolic,
  'preferences-desktop-wallpaper': PreferencesDesktopWallpaperSymbolic,
  'preferences-other': PreferencesOtherSymbolic,
  'preferences-system-details': PreferencesSystemDetailsSymbolic,
  'preferences-system-devices': PreferencesSystemDevicesSymbolic,
  'preferences-system-network-proxy': PreferencesSystemNetworkProxySymbolic,
  'preferences-system-network': PreferencesSystemNetworkSymbolic,
  'preferences-system-notifications': PreferencesSystemNotificationsSymbolic,
  'preferences-system-parental-controls': PreferencesSystemParentalControlsSymbolic,
  'preferences-system-privacy': PreferencesSystemPrivacySymbolic,
  'preferences-system-search': PreferencesSystemSearchSymbolic,
  'preferences-system-sharing': PreferencesSystemSharingSymbolic,
  'preferences-system': PreferencesSystemSymbolic,
  'preferences-system-time': PreferencesSystemTimeSymbolic,
  'printer-error': PrinterErrorSymbolic,
  'printer-network': PrinterNetworkSymbolic,
  'printer-printing': PrinterPrintingSymbolic,
  printer: PrinterSymbolic,
  'printer-warning': PrinterWarningSymbolic,
  'process-stop': ProcessStopSymbolic,
  'process-working': ProcessWorkingSymbolic,
  'radio-checked': RadioCheckedSymbolic,
  'radio-mixed': RadioMixedSymbolic,
  radio: RadioSymbolic,
  'rotation-allowed': RotationAllowedSymbolic,
  'rotation-locked': RotationLockedSymbolic,
  scanner: ScannerSymbolic,
  'screen-shared': ScreenSharedSymbolic,
  'security-high': SecurityHighSymbolic,
  'security-low': SecurityLowSymbolic,
  'security-medium': SecurityMediumSymbolic,
  'selection-end': SelectionEndSymbolic,
  'selection-start': SelectionStartSymbolic,
  'semi-starred-rtl': SemiStarredSymbolicRtl,
  'semi-starred': SemiStarredSymbolic,
  'send-to': SendToSymbolic,
  'sidebar-hide': SidebarHideSymbolic,
  'sidebar-show': SidebarShowSymbolic,
  'software-update-available': SoftwareUpdateAvailableSymbolic,
  'software-update-urgent': SoftwareUpdateUrgentSymbolic,
  'star-new': StarNewSymbolic,
  starred: StarredSymbolic,
  'start-here': StartHereSymbolic,
  'switch-off': SwitchOff,
  'switch-on': SwitchOn,
  'system-file-manager': SystemFileManagerSymbolic,
  'system-help': SystemHelpSymbolic,
  'system-lock-screen': SystemLockScreenSymbolic,
  'system-log-out': SystemLogOutSymbolic,
  'system-reboot': SystemRebootSymbolic,
  'system-run': SystemRunSymbolic,
  'system-search': SystemSearchSymbolic,
  'system-shutdown': SystemShutdownSymbolic,
  'system-software-install': SystemSoftwareInstallSymbolic,
  'system-switch-user': SystemSwitchUserSymbolic,
  'system-users': SystemUsersSymbolic,
  'tab-new': TabNewSymbolic,
  'task-due': TaskDueSymbolic,
  'task-past-due': TaskPastDueSymbolic,
  'text-editor': TextEditorSymbolic,
  'text-x-generic': TextXGenericSymbolic,
  'thunderbolt-acquiring': ThunderboltAcquiringSymbolic,
  thunderbolt: ThunderboltSymbolic,
  'tools-check-spelling': ToolsCheckSpellingSymbolic,
  'touch-disabled': TouchDisabledSymbolic,
  'touchpad-disabled': TouchpadDisabledSymbolic,
  tv: TvSymbolic,
  'uninterruptible-power-supply': UninterruptiblePowerSupplySymbolic,
  'user-available': UserAvailableSymbolic,
  'user-away': UserAwaySymbolic,
  'user-bookmarks': UserBookmarksSymbolic,
  'user-busy': UserBusySymbolic,
  'user-desktop': UserDesktopSymbolic,
  'user-home': UserHomeSymbolic,
  'user-idle': UserIdleSymbolic,
  'user-info': UserInfoSymbolic,
  'user-invisible': UserInvisibleSymbolic,
  'user-not-tracked': UserNotTrackedSymbolic,
  'user-offline': UserOfflineSymbolic,
  'user-status-pending': UserStatusPendingSymbolic,
  'user-trash-full': UserTrashFullSymbolic,
  'user-trash': UserTrashSymbolic,
  'utilities-terminal': UtilitiesTerminalSymbolic,
  'value-decrease': ValueDecreaseSymbolic,
  'value-increase': ValueIncreaseSymbolic,
  'video-display': VideoDisplaySymbolic,
  'video-joined-displays': VideoJoinedDisplaysSymbolic,
  'video-single-display': VideoSingleDisplaySymbolic,
  'video-x-generic': VideoXGenericSymbolic,
  'view-app-grid': ViewAppGridSymbolic,
  'view-conceal': ViewConcealSymbolic,
  'view-continuous': ViewContinuousSymbolic,
  'view-dual': ViewDualSymbolic,
  'view-fullscreen': ViewFullscreenSymbolic,
  'view-grid': ViewGridSymbolic,
  'view-list-bullet': ViewListBulletSymbolic,
  'view-list-ordered': ViewListOrderedSymbolic,
  'view-list': ViewListSymbolic,
  'view-mirror': ViewMirrorSymbolic,
  'view-more-horizontal': ViewMoreHorizontalSymbolic,
  'view-more': ViewMoreSymbolic,
  'view-paged': ViewPagedSymbolic,
  'view-pin': ViewPinSymbolic,
  'view-refresh': ViewRefreshSymbolic,
  'view-restore': ViewRestoreSymbolic,
  'view-reveal': ViewRevealSymbolic,
  'view-sort-ascending': ViewSortAscendingSymbolic,
  'view-sort-descending': ViewSortDescendingSymbolic,
  'view-wrapped-rtl': ViewWrappedSymbolicRtl,
  'view-wrapped': ViewWrappedSymbolic,
  'weather-clear-night': WeatherClearNightSymbolic,
  'weather-clear': WeatherClearSymbolic,
  'weather-few-clouds-night': WeatherFewCloudsNightSymbolic,
  'weather-few-clouds': WeatherFewCloudsSymbolic,
  'weather-fog': WeatherFogSymbolic,
  'weather-overcast': WeatherOvercastSymbolic,
  'weather-severe-alert': WeatherSevereAlertSymbolic,
  'weather-showers-scattered': WeatherShowersScatteredSymbolic,
  'weather-showers': WeatherShowersSymbolic,
  'weather-snow': WeatherSnowSymbolic,
  'weather-storm': WeatherStormSymbolic,
  'weather-tornado': WeatherTornadoSymbolic,
  'weather-windy': WeatherWindySymbolic,
  'web-browser': WebBrowserSymbolic,
  'window-close': WindowCloseSymbolic,
  'window-maximize': WindowMaximizeSymbolic,
  'window-minimize': WindowMinimizeSymbolic,
  'window-new': WindowNewSymbolic,
  'window-restore': WindowRestoreSymbolic,
  'x-office-address-book': XOfficeAddressBookSymbolic,
  'x-office-calendar': XOfficeCalendarSymbolic,
  'x-office-document': XOfficeDocumentSymbolic,
  'x-office-drawing': XOfficeDrawingSymbolic,
  'x-office-presentation': XOfficePresentationSymbolic,
  'x-office-spreadsheet': XOfficeSpreadsheetSymbolic,
  'zoom-fit-best': ZoomFitBestSymbolic,
  'zoom-in': ZoomInSymbolic,
  'zoom-original': ZoomOriginalSymbolic,
  'zoom-out': ZoomOutSymbolic,
};

function Icon({ className, name, colored, ...rest }) {
  const Element = Icons[name]

  if (!Element) 
    return <span>Invalid name: {name}</span>

  return (
    <span className={cx('Icon', className, { colored })} {...rest}>
      <Element />
    </span>
  );
}


const SVGR_LOADER = `!!@svgr/webpack?-svgo,+titleProp,+ref!`;
const ICON_PATH = `../assets/icons/`;

export function OptimizedIcon({ className, name, colored, ...rest }) {
  const [Element, setElement] = useState('div'); //null; Icons[name]

  useEffect(() => {
    if (!name) setElement(() => () => <span>Invalid name: {name}</span>);
    let canceled = false;
    import(
      /* webpackMode: "eager" */ `${SVGR_LOADER}${ICON_PATH}${name}.svg`
    )
      .then(module => module.default)
      .then(component => !canceled && setElement(component))
      .catch(() => setElement(() => () => <span>Failed to load: {name}</span>));
    return () => {
      canceled = true;
    };
  }, [name]);

  return (
    <span className={cx('Icon', className, { colored })} {...rest}>
      <Element />
    </span>
  );
}
