// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: internal/common/service_error.proto

package common

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ValidationError struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FieldName string `protobuf:"bytes,1,opt,name=field_name,json=fieldName,proto3" json:"field_name,omitempty"`
	Cause     string `protobuf:"bytes,2,opt,name=cause,proto3" json:"cause,omitempty"`
}

func (x *ValidationError) Reset() {
	*x = ValidationError{}
	if protoimpl.UnsafeEnabled {
		mi := &file_internal_common_service_error_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ValidationError) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ValidationError) ProtoMessage() {}

func (x *ValidationError) ProtoReflect() protoreflect.Message {
	mi := &file_internal_common_service_error_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ValidationError.ProtoReflect.Descriptor instead.
func (*ValidationError) Descriptor() ([]byte, []int) {
	return file_internal_common_service_error_proto_rawDescGZIP(), []int{0}
}

func (x *ValidationError) GetFieldName() string {
	if x != nil {
		return x.FieldName
	}
	return ""
}

func (x *ValidationError) GetCause() string {
	if x != nil {
		return x.Cause
	}
	return ""
}

type ServiceError struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code             int32              `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"` // TODO: enum...
	ValidationErrors []*ValidationError `protobuf:"bytes,2,rep,name=validation_errors,json=validationErrors,proto3" json:"validation_errors,omitempty"`
	DuplicatedFields []string           `protobuf:"bytes,3,rep,name=duplicated_fields,json=duplicatedFields,proto3" json:"duplicated_fields,omitempty"`
}

func (x *ServiceError) Reset() {
	*x = ServiceError{}
	if protoimpl.UnsafeEnabled {
		mi := &file_internal_common_service_error_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServiceError) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServiceError) ProtoMessage() {}

func (x *ServiceError) ProtoReflect() protoreflect.Message {
	mi := &file_internal_common_service_error_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServiceError.ProtoReflect.Descriptor instead.
func (*ServiceError) Descriptor() ([]byte, []int) {
	return file_internal_common_service_error_proto_rawDescGZIP(), []int{1}
}

func (x *ServiceError) GetCode() int32 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *ServiceError) GetValidationErrors() []*ValidationError {
	if x != nil {
		return x.ValidationErrors
	}
	return nil
}

func (x *ServiceError) GetDuplicatedFields() []string {
	if x != nil {
		return x.DuplicatedFields
	}
	return nil
}

var File_internal_common_service_error_proto protoreflect.FileDescriptor

var file_internal_common_service_error_proto_rawDesc = []byte{
	0x0a, 0x23, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x73, 0x22, 0x46, 0x0a, 0x0f, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x69, 0x65, 0x6c, 0x64,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x61, 0x75, 0x73, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x61, 0x75, 0x73, 0x65, 0x22, 0x9c, 0x01, 0x0a,
	0x0c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x12, 0x0a,
	0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x63, 0x6f, 0x64,
	0x65, 0x12, 0x4b, 0x0a, 0x11, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x2e, 0x56, 0x61, 0x6c,
	0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x10, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x12, 0x2b,
	0x0a, 0x11, 0x64, 0x75, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x10, 0x64, 0x75, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x65, 0x64, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x42, 0x30, 0x5a, 0x2e, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6e, 0x65, 0x74, 0x68, 0x6f, 0x6c,
	0x65, 0x64, 0x65, 0x76, 0x2f, 0x74, 0x72, 0x69, 0x70, 0x74, 0x79, 0x63, 0x68, 0x2f, 0x69, 0x6e,
	0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_internal_common_service_error_proto_rawDescOnce sync.Once
	file_internal_common_service_error_proto_rawDescData = file_internal_common_service_error_proto_rawDesc
)

func file_internal_common_service_error_proto_rawDescGZIP() []byte {
	file_internal_common_service_error_proto_rawDescOnce.Do(func() {
		file_internal_common_service_error_proto_rawDescData = protoimpl.X.CompressGZIP(file_internal_common_service_error_proto_rawDescData)
	})
	return file_internal_common_service_error_proto_rawDescData
}

var file_internal_common_service_error_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_internal_common_service_error_proto_goTypes = []interface{}{
	(*ValidationError)(nil), // 0: common.errors.ValidationError
	(*ServiceError)(nil),    // 1: common.errors.ServiceError
}
var file_internal_common_service_error_proto_depIdxs = []int32{
	0, // 0: common.errors.ServiceError.validation_errors:type_name -> common.errors.ValidationError
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_internal_common_service_error_proto_init() }
func file_internal_common_service_error_proto_init() {
	if File_internal_common_service_error_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_internal_common_service_error_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ValidationError); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_internal_common_service_error_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServiceError); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_internal_common_service_error_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_internal_common_service_error_proto_goTypes,
		DependencyIndexes: file_internal_common_service_error_proto_depIdxs,
		MessageInfos:      file_internal_common_service_error_proto_msgTypes,
	}.Build()
	File_internal_common_service_error_proto = out.File
	file_internal_common_service_error_proto_rawDesc = nil
	file_internal_common_service_error_proto_goTypes = nil
	file_internal_common_service_error_proto_depIdxs = nil
}